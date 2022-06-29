import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { FilterModalComponent } from '../../../modals/filter-modal/filter-modal.component';
import { ApiServiceService } from '../../shared/service/api-service.service';

@Component({
  selector: 'app-add-destiantion',
  templateUrl: './add-destiantion.component.html',
  styleUrls: ['./add-destiantion.component.scss']
})
export class AddDestiantionComponent implements OnInit {
  
  addDestinationForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    stateId: new FormControl('', [Validators.required]),
    ImageIds: new FormControl([], [Validators.required])
  });
  
  countriesList = [];
  stateList = [];
  items = 10;
  totalRecords;
  p: number = 1;
  selectedImageList = [];

  constructor(private spinner: NgxSpinnerService, private apiService: ApiServiceService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.apiService.getCountries().subscribe(response => {
      if (response['status'] === 200) {
        this.countriesList = response['response'];
       this.spinner.hide();
      }
    }, error => {
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
        this.addDestinationForm.controls['ImageIds'].setValue(imageIds);
      }
    });
  }

  addUpdateDestination(){
    this.apiService.addDestination(this.addDestinationForm.value).subscribe((response : any) => {
      if(response.status == 200){
        this.apiService.showAlertMessage('Destiantion name is successfully added.', 'success');
        this.addDestinationForm.reset();
      }
    }, error => {
      if(error.status == 400){
        this.apiService.showAlertMessage('Destination name already exist. Please try with different destination name.', 'error');
        this.addDestinationForm.reset();
      }
    })
  }

  setSelectedState(stateName){
    this.addDestinationForm.controls['stateId'].setValue(stateName);
  }

  removeImage(imageData){
    let selectedIds = this.addDestinationForm.value.ImageIds;
    let index = selectedIds.indexOf(imageData.id);
    selectedIds.splice(index,1);
    this.addDestinationForm.controls['ImageIds'].setValue(selectedIds);
    
    this.selectedImageList[0].map((data,itemIndex) => {
      if(data.id == imageData.id){
        this.selectedImageList[0].splice(itemIndex,1);
        return;
      }
    })
  }
}