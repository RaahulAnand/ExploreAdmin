import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { citiesList } from '../../modals/modals';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FilterModalComponent } from 'src/app/modals/filter-modal/filter-modal.component';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent implements OnInit, OnChanges {
  imageLoc = '../../../assets/images/';
  destinationsList = [];
  cityList = [];
  activityList = [];
  page: number = 1;
  totalRecords: number = 50;
  cityName: String = 'Kerala';
  filterOpen: String;
  // filterForm = new FormGroup({
  //   groupTour: new FormControl(''),
  //   induividualTour: new FormControl(''),
  //   conductingTour: new FormControl(''),
  //   hourly: new FormControl(''),
  //   halfDay: new FormControl(''),
  //   fullDay: new FormControl(''),
  //   multiDay: new FormControl(''),
  // });
  constructor(private dialog: MatDialog, private router: Router, private route: ActivatedRoute) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.cityName = event.url.split('/')[2];
      }
    }
    );
  }

  ngOnInit() {
    this.destinationsList = [
      {
        name: 'Bangalore',
        imgLoc: `${this.imageLoc}booking_Boating_Kuttanad.jpg`
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
    this.getCitiesList(citiesList);
    this.getActivityList(citiesList);
    window.scrollTo(0, 0);
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(this.route.params['value']['city'], changes);
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
  resetForm() {
    // this.filterForm.reset();
  }
  openFilter() {
    this.filterOpen = !this.filterOpen ? 'filter-responsive' : '';
    // const dialogRef = this.dialog.open(FilterModalComponent, {
    //   data: 'birthday',
    //   panelClass: 'product-dialog',
    //   backdropClass: 'backdropBackground'
    // });
    // dialogRef.afterClosed().subscribe(product => {

    // });
  }
  booking(item, id) {
    console.log(item, id);
    this.router.navigate(['/Description', id]);
  }
  public onPageChanged(pageNumber) {
    this.page = pageNumber;
  }
}
