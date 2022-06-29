import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'xplore-world';
  navbarClass = 'Home';
  windowScrolled: boolean;
  
  constructor(private router: Router) { 
    this.router.navigate(['/Package']);
  }

  ngOnInit() {

  }

}
