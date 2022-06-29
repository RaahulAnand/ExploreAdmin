import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public APIURL = environment.baseUrl;
  constructor(private http: HttpClient, private router: Router) { }

  public tokenResponse() {
    let token;
    token = JSON.parse(localStorage.getItem('tokenResponse'));
    if (token) {
      return token.token;
    }
    return null;
  }
  public userDetails() {
    let userDetails;
    userDetails = JSON.parse(localStorage.getItem('tokenResponse'));
    if (userDetails) {
      return userDetails.user;
    }
    return null;
  }
  public getAuthToken(): string {
    const tokenObject = this.tokenResponse();
    if (tokenObject != null) {
      
      return tokenObject;
    }
    return '';
  }
  public logout() {
    this.clearSessionAndredirectToLogin();
  }
  clearSessionAndredirectToLogin() {
    localStorage.removeItem('tokenResponse');
    window.location.href = `${window.location.origin}/Login`;
    this.router.navigate(['/Login']);
  }
  public refreshToken(): Observable<any> {
    const tokenResponse = this.tokenResponse();
    if (!tokenResponse) {
      return of(null);
    }
  }
}
