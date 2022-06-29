import { AfterViewInit, Component, OnChanges, OnInit  } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiServiceService } from '../../components/shared/service/api-service.service';

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.scss']
})
export class FilterModalComponent implements OnInit, AfterViewInit {

  imagesList = [];
  items = 100;
  totalRecords;
  p: number = 1;
  selectedImageList = [];
  selectedImageId = [];
  constructor(private dialogRef: MatDialogRef<FilterModalComponent>, private spinner: NgxSpinnerService, private apiService: ApiServiceService) { }

  ngOnInit() {
    this.spinner.show();
    this.getImages();
    window.scrollTo(0, 0);
  }
  ngAfterViewInit(){

  }
  close() {
    this.dialogRef.close({event : 'cancel'});
  }

  getImages() {
    this.apiService.getImages().subscribe(response => {
      if (response['status'] === 200) {
        this.imagesList = response['response'];
        this.totalRecords = this.imagesList.length
        this.spinner.hide();
      }
    }, error => {
      console.error(error);
      this.spinner.hide();
    })
  }

  pageChange(value) {
    this.items = value;
  }

  setImageId(imageId){
    if(imageId){
      if(!this.selectedImageId.includes(imageId)){
        this.selectedImageId.push(imageId);
      }else{
        let index = this.selectedImageId.indexOf(imageId);
        this.selectedImageId.splice(index, 1)
      }
      this.imagesList.forEach((imageData) => {
        if(imageId == imageData.id && this.selectedImageId.includes(imageData.id)){
          this.selectedImageList.push(imageData)
        }else if(imageId == imageData.id && !this.selectedImageId.includes(imageData.id)){
          this.selectedImageList.forEach((data, index) => {
            if(data.id == imageId){
              this.selectedImageList.splice(index, 1)
            }
          })
        }
      })
    }
  }

  applyFilter() {
    this.dialogRef.close({event: 'success', data:this.selectedImageList});
  }
  
  searchByName(searchName){
    this.apiService.getImagesByName(searchName).subscribe(response => {
      if (response['status'] === 200) {
        this.imagesList = response['response'];
        this.totalRecords = this.imagesList.length
        this.spinner.hide();
      }
    }, error => {
      console.error(error);
      this.spinner.hide();
    })
  }

  refreshList(){
    this.getImages();
  }
}
