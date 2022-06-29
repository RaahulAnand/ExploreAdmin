import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { URLPATH } from '../service.constant';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public APIURL = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  // For Login
  public login(userLoginData) {
    const loginForm = {
      email: userLoginData.emailId || 'info@exploreworld.com',
      password: userLoginData.password || 'Unexplored@321'
    };
    return this.httpClient
      .post(`${this.APIURL}${URLPATH.LOGIN}`, loginForm);
  }
}
