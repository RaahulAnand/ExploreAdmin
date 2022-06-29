import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiServiceService } from '../../components/shared/service/api-service.service';

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.scss']
})
export class FilterFormComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<FilterFormComponent> , private apiService: ApiServiceService, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
  closeModal() {
    this.dialogRef.close({event : 'cancel'});
  }
  deleteImages(){
    this.apiService.deleteImage([this.data]).subscribe(response => {
      if(response['status'] == 200){
        this.dialogRef.close({event : 'success'});
      }
    })
  }
}
