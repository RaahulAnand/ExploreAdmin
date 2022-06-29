import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
@Component({
  selector: 'ads-carousel',
  templateUrl: './ads-carousel.component.html',
  styleUrls: ['./ads-carousel.component.scss']
})
export class AdsCarouselComponent implements OnInit {
  config: SwiperConfigInterface = {};
  imageLoc = '../../../assets/images/';
  constructor() {
    this.config = {
      slidesPerView: 1,
      spaceBetween: 0,
      keyboard: true,
      navigation: true,
      pagination: false,
      grabCursor: true,
      loop: false,
      preloadImages: false,
      lazy: true,
      effect: 'slide'
    };
  }
  adsList = [];
  ngOnInit() {
    this.adsList = [
      {
        name: 'Goa',
        imgLoc: `${this.imageLoc}scuba-diving.jpg`
      }, {
        name: 'Kerala',
        imgLoc: `${this.imageLoc}boathouse.jpg`
      }, {
        name: 'Rajasthan',
        imgLoc: `${this.imageLoc}rajasthan.jpg`
      }
    ];
  }

}
