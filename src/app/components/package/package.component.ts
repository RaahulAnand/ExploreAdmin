import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.scss']
})
export class PackageComponent implements OnInit {
  pricingGroup = 'perPerson';
  pricingCurrency = 'INR';
  itineryDayPlanList = [];
  itineryDayPlanCount = 0;
  itineryInclusionsList = [];
  itineryInclusionsCount = 0;

  constructor() { }

  ngOnInit() {
    this.addItineryDayplan();
    this.addItineryInclusions();
  }
  addItineryDayplan(){
    this.itineryDayPlanCount += 1;
    const newRow: any = {
      place: '',
      dayPlan: '',
    };
    this.itineryDayPlanList.push(newRow);
  }
  removeItineryDayplan(index){
    this.itineryDayPlanCount -= 1;
    this.itineryDayPlanList.splice(index, 1);
  } 
  addItineryInclusions(){
    this.itineryInclusionsCount += 1;
    const newRow: any = {
      inclusions: '',
    };
    this.itineryInclusionsList.push(newRow);
  }
  removeItineryInclusions(index){
    this.itineryInclusionsCount -= 1;
    this.itineryInclusionsList.splice(index, 1);
  }
  increment(type) {
  }
  decrement(type) {
  }
}
