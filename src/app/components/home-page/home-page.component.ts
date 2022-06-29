import { Component, OnInit } from '@angular/core';
import { homePageSearchTabs } from '../../modals/modals';
import { citiesList, popularDestination } from '../../modals/modals';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  homePageTabs = homePageSearchTabs;
  destinationHeading: Boolean = true;
  selectedItem;
  imageLoc = '../../../assets/images/';
  cityList = [];
  destList = [];
  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.selectedItem = this.homePageTabs[0];
    this.getCitiesList(citiesList);
    this.getPopularDestinations(popularDestination);
    this.spinner.show();
  }
  changeTabs(event, tabs) {
    this.selectedItem = tabs;
    event.preventDefault();
  }
  getCitiesList(citiesList) {
    citiesList.forEach(city => {
      city = { ...city, imgLoc: `${this.imageLoc}${city.imgLoc}` };
      this.cityList = [...this.cityList, city];
    });
    this.cityList = [{
      headings: {
        title: 'Discover Near You',
        subTitle: 'Unique Experiences',
        itemClass: 'item-style-grey'
      },
      itemsList: [...this.cityList]
    }];
    this.spinner.hide();
  }
  getPopularDestinations(destList) {
    destList.forEach(destinations => {
      destinations = { ...destinations, imgLoc: `${this.imageLoc}${destinations.imgLoc}` };
      this.destList = [...this.destList, destinations];
    });
    this.destList = [{
      headings: {
        title: 'Explore Popular Destinations in Kerala',
        itemClass: 'item-style-grey',
        nameClass: 'name-style-activity'
      },
      itemsList: [...this.destList]
    }];
    console.log(this.destList);
  }
  goToState(inputValue) {
    console.log(inputValue.value);
  }
}
