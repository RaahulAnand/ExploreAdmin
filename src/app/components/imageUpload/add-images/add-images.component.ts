import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiServiceService } from '../../shared/service/api-service.service';

@Component({
  selector: 'app-add-images',
  templateUrl: './add-images.component.html',
  styleUrls: ['./add-images.component.scss']
})
export class AddImagesComponent implements OnInit {
  image: File;
  images = [];
  imagesToshow = [];
  imageNames = [];
  imageFileNames = [];

  imageUploadForm = new FormGroup({
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required]),
    imageFileName: new FormControl('', [Validators.required]),
    datajson: new FormControl('')
  });

  constructor(private apiService: ApiServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  get f() {
    return this.imageUploadForm.controls;
  }

  onFileChange(event) {
    this.image = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      filesAmount = filesAmount > 5 ? 5 : filesAmount;
      if(filesAmount <= 5 && this.imageNames.length < 5){
        for (let i = 0; i < filesAmount; i++) {
          this.imageNames.push(event.target.files[i].name)
          this.imageFileNames.push(event.target.files[i].name)
          this.images.push(event.target.files[i])
          var reader = new FileReader();
          reader.onload = (event: any) => {
            this.imagesToshow.push(event.target.result);
          this.imageUploadForm.patchValue({
            fileSource: this.images,
            imageFileName: this.imageNames
          });
          }
          reader.readAsDataURL(event.target.files[i]);
        }
      }else{
        this.apiService.showAlertMessage('Maximum of 5 images can be choosen', 'error');
      }
    }
  }
  changeName(name,index){
    if(name !== null || name !== undefined){
      this.imageFileNames[index] = name;
      event.stopPropagation();
    }
  }
  uploadImages() {
    if(this.imageFileNames.length == this.images.length){
      this.images.forEach(async (imageFile, index)=>{
        let jsonData = [];
          jsonData.push({
            "ImageFileName": imageFile.name,
            "ImageName": this.imageFileNames[index]
          })
          const formData = new FormData();
          formData.append("file", imageFile);
          formData.append("Datajson", JSON.stringify(jsonData));
          await this.apiService.addImages(formData).subscribe(res => {
            if(res['status'] == 200){
              this.apiService.showAlertMessage('Image data added successfully', 'success')
              this.router.navigate(['/ViewImages']);
            }else{
              this.apiService.showAlertMessage('Error in adding image data', 'error')
            }
          });
        })
        }
  }
}
