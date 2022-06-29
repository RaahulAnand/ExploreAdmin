import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router'
import { AuthenticationService } from '../service/authentication.service';

@Injectable({
  providedIn: 'root'
})

export class RoleGuard implements CanActivate {

  user: any;
  userId: any;
  token: any;
  userData: any;

  constructor(private _authService: AuthenticationService, private _router: Router) { }

  async canActivate(): Promise<boolean> {
    const tokenResponse = this._authService.tokenResponse();
    try {
      if (tokenResponse) {
        return true;
      } else {
        this._router.navigate(['/Login']);
        return false;
      }
    } catch (error) {
      console.error(error);
    }

    return true;
  }
}
