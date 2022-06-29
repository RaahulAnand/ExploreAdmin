import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { FilterModalComponent } from '../../../modals/filter-modal/filter-modal.component';
import { ApiServiceService } from '../../shared/service/api-service.service';

@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.scss']
})
export class AddCountryComponent implements OnInit {
  
  addCountryForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    ImageIds: new FormControl([], [Validators.required])
  });
  
  countriesList = [];
  items = 10;
  totalRecords;
  p: number = 1;
  selectedImageList = [];

  constructor(private spinner: NgxSpinnerService, private apiService: ApiServiceService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  chooseImages(){
     const dialogRef = this.dialog.open(FilterModalComponent);
    dialogRef.afterClosed().subscribe(product => {  
      if(product.event == 'success'){
        this.selectedImageList = [];
        this.selectedImageList.push(product.data);
        let imageIds = [];
        if(this.selectedImageList[0].length > 0){
          this.selectedImageList[0].forEach((imageData)=>{
            imageIds.push(imageData.id);
          })
        }
        this.addCountryForm.controls['ImageIds'].setValue(imageIds);
      }
    });
  }

  addUpdateCountry(){
    this.apiService.addCountries(this.addCountryForm.value).subscribe((response : any) => {
      if(response.status == 200){
        this.apiService.showAlertMessage('Country name is successfully added.', 'success');
        this.addCountryForm.reset();
      }
    }, error => {
      if(error.status == 400){
        this.apiService.showAlertMessage('Country name already exist. Please try with different country name.', 'error');
        this.addCountryForm.reset();
      }
    })
  }

  removeImage(imageData){
    let selectedIds = this.addCountryForm.value.ImageIds;
    let index = selectedIds.indexOf(imageData.id);
    selectedIds.splice(index,1);
    this.addCountryForm.controls['ImageIds'].setValue(selectedIds);
    
    this.selectedImageList[0].map((data,itemIndex) => {
      if(data.id == imageData.id){
        this.selectedImageList[0].splice(itemIndex,1);
        return;
      }
    })
  }
}