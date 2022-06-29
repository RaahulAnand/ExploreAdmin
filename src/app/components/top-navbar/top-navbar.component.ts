import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthenticationService } from '../shared/service/authentication.service';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss']
})
export class TopNavbarComponent implements OnInit, OnChanges {
  @Input() className: String;
  xploreLogo = '../../../assets/images/logo/xplore_logo.png';
  isLoggedIn: boolean = true;
  userNameDetails: any;

  constructor(private router: Router, private authService: AuthenticationService) {
    const userDetails = this.authService.userDetails();
    this.userNameDetails = userDetails;
    this.isLoggedIn = userDetails ? true : false;

  }
  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges) {
  }
  goToHome() {
    this.router.navigate(['/Home']);
  }
  logoutUser() {
    this.authService.logout();
  }
}
