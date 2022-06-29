import { Component, OnInit, Input } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
@Component({
  selector: 'app-destination-details',
  templateUrl: './destination-details.component.html',
  styleUrls: ['./destination-details.component.scss']
})
export class DestinationDetailsComponent implements OnInit {
  @Input() heading;
  config: SwiperConfigInterface = {};
  imageLoc = '../../../assets/images/';
  citiesList = [];
  constructor() {
    this.config = {
      observer: true,
      slidesPerView: 4,
      keyboard: true,
      navigation: true,
      pagination: false,
      grabCursor: true,
      loop: false,
      preloadImages: false,
      lazy: true,
      breakpoints: {
        480: {
          slidesPerView: 1
        },
        740: {
          slidesPerView: 2,
        },
        960: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: 4,
        }
      }
    };
  }

  ngOnInit() {
    console.log(this.heading)
    this.citiesList = [
      {
        name: 'Bangalore',
        imgLoc: `${this.imageLoc}bangalore.jpg`
      }, {
        name: 'Goa',
        imgLoc: `${this.imageLoc}goa.jpg`
      }, {
        name: 'Pune',
        imgLoc: `${this.imageLoc}delhi.jpg`
      }, {
        name: 'Chennai',
        imgLoc: `${this.imageLoc}kerala.jpg`
      }, {
        name: 'Ooty',
        imgLoc: `${this.imageLoc}goa.jpg`
      }, {
        name: 'Manali',
        imgLoc: `${this.imageLoc}delhi.jpg`
      }, {
        name: 'Abc',
        imgLoc: `${this.imageLoc}bangalore.jpg`
      }, {
        name: 'Def',
        imgLoc: `${this.imageLoc}goa.jpg`
      }, {
        name: 'Ghi',
        imgLoc: `${this.imageLoc}bangalore.jpg`
      }, {
        name: 'Jkl',
        imgLoc: `${this.imageLoc}delhi.jpg`
      }
    ];
  }

}
