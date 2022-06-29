import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiServiceService } from '../shared/service/api-service.service';

@Component({
  selector: 'app-destiantion',
  templateUrl: './destiantion.component.html',
  styleUrls: ['./destiantion.component.scss']
})
export class DestiantionComponent implements OnInit {

  countriesList = [];
  stateList = [];
  destinationList = [];
  items = 30;
  totalRecords;
  p: number = 1;
  constructor(private spinner: NgxSpinnerService, private apiService: ApiServiceService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.apiService.getCountries().subscribe(response => {
      if (response['status'] === 200) {
        if(response['response'].length > 0){
          this.countriesList = response['response'];
        }else{
          this.apiService.showAlertMessage('No country data found.', 'error');
        }
        this.spinner.hide();
      }
    }, error => {
      this.spinner.hide();
      console.error(error);
    })
  }
  populateStates(countryName) {
    this.spinner.show();
    this.apiService.getStatesByCountryName(countryName).subscribe(response => {
      if (response['status'] === 200) {
        if(response['response'].length > 0){
          this.stateList = response['response'];
        }
        else{
          this.apiService.showAlertMessage('No state data found for selected country.', 'error');
          this.stateList = [];
        }
        this.spinner.hide();
      }
    }, error => {
      this.spinner.hide();
      console.error(error);
    })
  }
  getDestinationData(countryName, StateName) {
    this.spinner.show();
    this.apiService.getDestinationsByStateName(countryName, StateName).subscribe(stateRes => {
      if (stateRes['status'] === 200) {
        this.destinationList = stateRes['response'];
        this.totalRecords = this.destinationList.length;
        if(this.totalRecords == 0){
          this.apiService.showAlertMessage('No destinaton data found for the selected state.', 'error')
        }
        this.spinner.hide();
      }
    }, error => {
      console.error(error);
      this.spinner.hide();
    })

  }
  changeData(stateID) {
    console.log(stateID)
  }
  pageChange(value) {
    this.items = value;
  }
}
