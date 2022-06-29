import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiServiceService } from '../shared/service/api-service.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  countriesList = [];
  items = 30;
  totalRecords;
  p: number = 1;
  constructor(private spinner: NgxSpinnerService, private apiService: ApiServiceService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.getCountries();
  }

  getCountries() {
    this.apiService.getCountries().subscribe(response => {
      if (response['status'] === 200) {
        this.countriesList = response['response'];
        this.totalRecords = this.countriesList.length
        this.spinner.hide();
      }
    }, error => {
      console.error(error);
      this.spinner.hide();
    })
  }
  changeData(countryId) {
    console.log(countryId)
  }
  pageChange(value) {
    this.items = value;
  }
}
