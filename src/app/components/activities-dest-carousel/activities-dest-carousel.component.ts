import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-activities-dest-carousel',
  templateUrl: './activities-dest-carousel.component.html',
  styleUrls: ['./activities-dest-carousel.component.scss']
})
export class ActivitiesDestCarouselComponent implements OnInit {

  @Input() activityList;
  imageLoc = '../../../assets/images/';
  citiesList = [];
  headings;
  constructor() {
  }
  ngOnInit() {
    this.headings = this.activityList[0].headings;
    this.citiesList = this.activityList[0].itemsList;
  }
}
