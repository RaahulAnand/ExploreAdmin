import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './booking/booking.component';
import { SharedModule } from '../shared/shared.module';
import { BookingRoutingModule } from './booking-routing.module';

@NgModule({
  declarations: [BookingComponent],
  imports: [
    CommonModule,
    SharedModule,
    BookingRoutingModule
  ]
})
export class BookingModule { }
