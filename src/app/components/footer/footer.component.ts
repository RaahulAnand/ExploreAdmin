import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  xploreLogo = '../../../assets/images/logo/xplore_logo.png';
  footerStyleArray = ['Company'];
  footerStyle;
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.footerStyle = this.footerStyleArray.includes(event.url.split('/')[1]) ? 'footer-none' : '';
      }
    });
  }
  ngOnInit() {
  }

}
