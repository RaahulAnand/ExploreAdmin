import { Component, OnInit } from '@angular/core';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { FormGroup } from '@angular/forms';
import { headCount } from '../../../modals/modals';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
  }]
})
export class BookingComponent implements OnInit {
  headCount = [];
  isTokenApplied: Boolean = false;
  constructor() { }

  ngOnInit() {
    this.headCount = headCount;
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
  applyToken(promo) {
    console.log(promo)
    this.isTokenApplied = !this.isTokenApplied;
  }
}
