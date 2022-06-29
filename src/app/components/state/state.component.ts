import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiServiceService } from '../shared/service/api-service.service';


@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent implements OnInit {
  countriesList = [];
  stateList = [];
  items = 30;
  totalRecords;
  p: number = 1;
  constructor(private spinner: NgxSpinnerService, private apiService: ApiServiceService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.apiService.getCountries().subscribe(response => {
      if (response['status'] === 200) {
        this.countriesList = response['response'];
       this.spinner.hide();
      }
    }, error => {
      console.error(error);
    })
  }
  searchStates(countryName) {
    if (countryName !== 'selected') {
      this.spinner.show();
      this.apiService.getStatesByCountryName(countryName).subscribe(stateRes => {
        if (stateRes['status'] === 200) {
          this.stateList = stateRes['response'];
          this.totalRecords = this.stateList.length;
          if(this.totalRecords == 0){
            this.apiService.showAlertMessage('No states found for the selected country.', 'error')
          }
          this.spinner.hide();
        }
      }, error => {
        console.error(error);
        this.spinner.hide();
      })
    }

  }
  changeData(stateID) {
    console.log(stateID)
  }
  pageChange(value) {
    this.items = value;
  }
}