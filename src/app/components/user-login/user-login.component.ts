import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/service/login.service';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { SuccessResponse } from '../shared/service/interface.constant';
import { HTTP_STATUS } from '../shared/service.constant';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthenticationService } from '../shared/service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  userLoginForm = new FormGroup({
    emailId: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });
  constructor(
    private loginService: LoginService,
    private snackBar: MatSnackBar,
    private authService: AuthenticationService,
    private spinner: NgxSpinnerService,
    private router: Router) {
    const userDetails = this.authService.userDetails();
    if (userDetails) {
      this.snackBar.open('User already Logged in', 'X',
        { panelClass: 'success', verticalPosition: 'top', duration: 5000 });
      this.router.navigate(['']);
    }
  }

  ngOnInit() {
  }
  loginUser() {
    this.spinner.show();
    this.loginService.login(this.userLoginForm.value)
      .subscribe((response: SuccessResponse) => {
        if (response && response.status === HTTP_STATUS.success) {
          this.snackBar.open('User Logged in Successfully', 'X',
            { panelClass: 'success', verticalPosition: 'top', duration: 5000 });
          localStorage.setItem('tokenResponse', JSON.stringify(response.response));
          this.userLoginForm.reset();
          window.location.href = `${window.location.origin}/Home`
        }
        this.spinner.hide();
      }, error => {
        this.spinner.hide();
        if (error.status === HTTP_STATUS.loginError) {
          this.snackBar.open(error.error, 'X',
            { panelClass: 'success', verticalPosition: 'top', duration: 5000 });
          this.userLoginForm.reset();
        }
      });
  }
}


