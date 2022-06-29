import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpHeaderResponse,
    HttpProgressEvent,
    HttpSentEvent,
    HttpResponse,
    HttpInterceptor,
    HTTP_INTERCEPTORS,
    HttpUserEvent,
} from '@angular/common/http';
import { Observable, BehaviorSubject, throwError, of } from 'rxjs';
import { catchError, switchMap, take, filter, map } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';


@Injectable()
export class AppInterceptor implements HttpInterceptor {
    public isRefreshingToken = false;
    private refreshTokenInProgress = false;
    private logoutRedirectionInprogress = false;
    public tokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);
    constructor(public authService: AuthenticationService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler):
        Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any> | any> {
        // if (request.url.includes('token')) {
        //     request = this.addAuthenticationToken(request);
        // } else {
            request = this.updateHeader(request);
        // }

        return next.handle(request).pipe(
            map(response => {
                if (response instanceof HttpResponse) {
                    return response.clone({ body: { status: response.status, response: response.body } });
                }

            }),
            catchError(errorResponse => {
                switch (errorResponse.status) {
                    case 400:
                        return throwError(errorResponse);
                    case 401:
                        if (errorResponse.hasOwnProperty('error')) {
                            return throwError(errorResponse);
                        }

                }
            }
            ));
    }

    private updateHeader(request) {
        return request.clone({
            setHeaders: {
                Authorization: `Bearer ${this.authService.getAuthToken()}`
            }
        });
    }

    private addAuthenticationToken(request) {
        return request.clone({
            setHeaders: {
                Accept: 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
    }

    private handleLogout() {
        this.logoutRedirectionInprogress = true;
        // this.messageBoxService.logMessage(LABEL_SESSION_EXPIRY);
        setTimeout(() => {
            this.authService.logout();
        }, 1200);
    }
}

export const tokenInterceptor = [{
    provide: HTTP_INTERCEPTORS,
    useClass: AppInterceptor,
    multi: true
}];
