import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { FilterFormComponent } from '../../../modals/filter-form/filter-form.component';
import { ApiServiceService } from '../../shared/service/api-service.service';

@Component({
  selector: 'app-view-images',
  templateUrl: './view-images.component.html',
  styleUrls: ['./view-images.component.scss']
})
export class ViewImagesComponent implements OnInit {
  countriesList = [];
  items = 5;
  totalRecords;
  p: number = 1;
  constructor(private spinner: NgxSpinnerService, private apiService: ApiServiceService, private dialog: MatDialog, private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this.spinner.show();
    this.getImages();
  }

  getImages() {
    this.apiService.getImages().subscribe(response => {
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
  deleteImage(imageData) {
    console.log(imageData)
    const dialogRef = this.dialog.open(FilterFormComponent, { data: imageData });
    dialogRef.afterClosed().subscribe(response => {
      if (response && response.event == 'success') {
        this.snackBar.open('Image data deleted successfully', 'X',
          { panelClass: 'success', verticalPosition: 'top', duration: 5000 });
        this.getImages();
      }else{
        this.snackBar.open('Error in deleting image data', 'X',
          { panelClass: 'error', verticalPosition: 'top', duration: 5000 });
        this.getImages();
      }
    });
  }
  pageChange(value) {
    this.items = value;
  }
}