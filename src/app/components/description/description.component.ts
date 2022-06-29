import { Component, OnInit } from '@angular/core';
import { citiesList, dummyParagraph } from '../../modals/modals';
import { ActivatedRoute, Router } from '@angular/router';
import { headCount } from '../../modals/modals';
@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {
  imageLoc = '../../../assets/images/';
  descId;
  headCount = [];
  cityList = [];
  activityList = [];
  dummyContent = dummyParagraph;
  overViewTab: Boolean = false;
  itineryTab: Boolean = false;
  inclusionTab: Boolean = false;
  exclusionTab: Boolean = false;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const descId = this.route.snapshot.params.DescId;
    this.headCount = headCount;
    this.getCitiesList(citiesList);
    this.getActivityList(citiesList);
    window.scrollTo(0, 0);
  }
  increment(type) {
    this.headCount.map(item => {
      if (item.type === type) {
        item.count++;
      }
    });
  }
  decrement(type) {
    this.headCount.map(item => {
      if (item.type === type && item.type !== 'adultCount' && item.count > 0) {
        item.count--;
      }
      if (item.type === 'adultCount' && item.count > 1) {
        item.count--;
      }
    });
  }
  openTab(tabName) {
    if (tabName === 1) {
      this.overViewTab = !this.overViewTab;
    }
    if (tabName === 2) {
      this.itineryTab = !this.itineryTab;
    }
  }
  getCitiesList(citiesList) {
    citiesList.forEach(city => {
      city = { ...city, imgLoc: `${this.imageLoc}${city.imgLoc}` };
      this.cityList = [...this.cityList, city];
    });
    this.cityList = [{
      headings: {
        title: 'Explore Popular Destinations in Kerala',
        className: 'heading-style',
        itemClass: 'item-style',
        nameClass: 'name-style-activity'
      },
      itemsList: [...this.cityList]
    }];
  }
  getActivityList(activitiesList) {
    activitiesList.forEach(activity => {
      activity = { ...activity, imgLoc: `${this.imageLoc}${activity.imgLoc}` };
      this.activityList = [...this.activityList, activity];
    });
    this.activityList = [{
      headings: {
        title: 'Explore Activities in Kerala',
        className: 'heading-style',
        itemClass: 'item-style',
        nameClass: 'name-style-activity'
      },
      itemsList: [...this.activityList]
    }];
  }
  booking() {
    this.router.navigate(['/Booking', '123123123']);
  }
}
