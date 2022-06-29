import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { URLPATH } from '../service.constant';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  public APIURL = environment.baseUrl;

  constructor(private httpClient: HttpClient, private _snackBar: MatSnackBar) { }

  // show Snackbar
  public showAlertMessage(message, type){
    this._snackBar.open(message, 'X', {
      duration : 5000,
      horizontalPosition : 'center',
      verticalPosition : 'top',
      panelClass : type
    });
  }
  // Get Countries
  public getCountries() {
    return this.httpClient
      .get(`${this.APIURL}${URLPATH.COUNTRY}`);
  }
  // Add Countries
  public addCountries(countryForm) {
    return this.httpClient
    .post(`${this.APIURL}${URLPATH.COUNTRY}`, countryForm);
  }

  // Get States
  public getStates() {
    return this.httpClient
      .get(`${this.APIURL}${URLPATH.STATE}`);
  }
  // Add State
  public addStates(stateForm) {
    return this.httpClient
    .post(`${this.APIURL}${URLPATH.STATE}`, stateForm);
  }

  // Get States By Country Name
  public getStatesByCountryName(countryName) {
    console.log(`${URLPATH.STATE}?country=${countryName}`);
    return this.httpClient
      .get(`${this.APIURL}${URLPATH.STATE}?country=${countryName}`).pipe(catchError(error => { return error; }));
  }

  // Add Destination
  public addDestination(destinationForm) {
    return this.httpClient
    .post(`${this.APIURL}${URLPATH.DESTINATION}`, destinationForm);
  }

  // Get Destination By State Name
  public getDestinationsByStateName(countryName, stateName) {
    return this.httpClient
      .get(`${this.APIURL}${URLPATH.DESTINATION}?country=${countryName}&state=${stateName}`).pipe(catchError(error => { return error; }));
  }

  // Get Attraction By State Name and Country Name
  public getAttractionsByStateName(countryName, stateName) {
    return this.httpClient
      .get(`${this.APIURL}${URLPATH.GETATTRACTION}?country=${countryName}&state=${stateName}`).pipe(catchError(error => { return error; }));
  }

  // Get Images
  public getImages() {
    return this.httpClient
      .get(`${this.APIURL}${URLPATH.GETIMAGES}?pageNumber=1&pageSize=100&organisationId=1`);
  }

  // Get Images
  public getImagesByName(searchString) {
    return this.httpClient
      .get(`${this.APIURL}${URLPATH.GETIMAGES}?pageNumber=1&pageSize=100&organisationId=1&SearchString=${searchString}`);
  }

  // Add Images
  public addImages(imageForm) {
    return this.httpClient
      .post(`${this.APIURL}${URLPATH.ADDIMAGES}`, imageForm).pipe(catchError(error => { return error; }));
  }

   // Delete Images
   public deleteImage(imageData) {
    return this.httpClient
      .post(`${this.APIURL}${URLPATH.DELETEIMAGES}`, imageData).pipe(catchError(error => { return error; }));
  }
  
}
