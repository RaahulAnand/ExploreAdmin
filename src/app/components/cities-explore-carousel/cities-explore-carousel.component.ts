import { Component, OnInit, Input } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cities-explore-carousel',
  templateUrl: './cities-explore-carousel.component.html',
  styleUrls: ['./cities-explore-carousel.component.scss']
})
export class CitiesExploreCarouselComponent implements OnInit {
  @Input() itemList;
  config: SwiperConfigInterface = {};
  imageLoc = '../../../assets/images/';
  citiesList = [];
  headings;
  constructor(private router: Router) {
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
    this.headings = this.itemList[0].headings;
    this.citiesList = this.itemList[0].itemsList;
  }
  goToPlaces(city, index) {
    console.log(city, index);
    this.router.navigate(['/City', city.name]);
  }
}
