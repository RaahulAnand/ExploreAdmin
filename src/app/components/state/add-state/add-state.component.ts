import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { FilterModalComponent } from '../../../modals/filter-modal/filter-modal.component';
import { ApiServiceService } from '../../shared/service/api-service.service';

@Component({
  selector: 'app-add-state',
  templateUrl: './add-state.component.html',
  styleUrls: ['./add-state.component.scss']
})
export class AddStateComponent implements OnInit {
  
  addStateForm = new FormGroup({
    Name: new FormControl('', [Validators.required]),
    countryId: new FormControl('', [Validators.required]),
    ImageIds: new FormControl([], [Validators.required])
  });
  
  countriesList = [];
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
        this.addStateForm.controls['ImageIds'].setValue(imageIds);
      }
    });
  }

  addUpdateState(){
    this.apiService.addStates(this.addStateForm.value).subscribe((response : any) => {
      if(response.status == 200){
        this.apiService.showAlertMessage('State name is successfully added.', 'success');
        this.addStateForm.reset();
      }
    }, error => {
      if(error.status == 400){
        this.apiService.showAlertMessage('State name already exist. Please try with different state name.', 'error');
        this.addStateForm.reset();
      }
    })
  }

  setSelectedCountry(countryName){
    this.addStateForm.controls['countryId'].setValue(countryName);
  }

  removeImage(imageData){
    let selectedIds = this.addStateForm.value.ImageIds;
    let index = selectedIds.indexOf(imageData.id);
    selectedIds.splice(index,1);
    this.addStateForm.controls['ImageIds'].setValue(selectedIds);
    
    this.selectedImageList[0].map((data,itemIndex) => {
      if(data.id == imageData.id){
        this.selectedImageList[0].splice(itemIndex,1);
        return;
      }
    })
  }
}