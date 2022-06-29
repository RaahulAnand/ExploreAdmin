import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SwiperModule } from 'ngx-swiper-wrapper';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './components/home-page/home-page.component';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserSignupComponent } from './components/user-signup/user-signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner";
import { HttpClientModule } from '@angular/common/http';
import { CitiesExploreCarouselComponent } from './components/cities-explore-carousel/cities-explore-carousel.component';
import { AdsCarouselComponent } from './components/ads-carousel/ads-carousel.component';
import { ActivitiesDestCarouselComponent } from './components/activities-dest-carousel/activities-dest-carousel.component';
import { AttractionsComponent } from './components/attractions/attractions.component';
import { SharedModule } from './components/shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DestinationDetailsComponent } from './components/destination-details/destination-details.component';
import { PlacesComponent } from './components/places/places.component';
import { FilterModalComponent } from './modals/filter-modal/filter-modal.component';
import { FilterFormComponent } from './modals/filter-form/filter-form.component';
import { DescriptionComponent } from './components/description/description.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { tokenInterceptor } from './components/shared/service/app.interceptor';
import { PackageComponent } from './components/package/package.component';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { StateComponent } from './components/state/state.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { AddStateComponent } from './components/state/add-state/add-state.component';
import { CountryComponent } from './components/country/country.component';
import { AddCountryComponent } from './components/country/add-country/add-country.component';
import { DestiantionComponent } from './components/destiantion/destiantion.component';
import { AddDestiantionComponent } from './components/destiantion/add-destiantion/add-destiantion.component';
import { AddImagesComponent } from './components/imageUpload/add-images/add-images.component';
import { ViewImagesComponent } from './components/imageUpload/view-images/view-images.component';
import { HomeComponent } from './components/home/home.component';
import { RoleGuard } from './components/shared/guard/role.guard';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TopNavbarComponent,
    FooterComponent,
    UserLoginComponent,
    UserSignupComponent,
    CitiesExploreCarouselComponent,
    AdsCarouselComponent,
    ActivitiesDestCarouselComponent,
    AttractionsComponent,
    DestinationDetailsComponent,
    PlacesComponent,
    FilterModalComponent,
    FilterFormComponent,
    DescriptionComponent,
    AboutusComponent,
    PackageComponent,
    SideNavbarComponent,
    StateComponent,
    AddStateComponent,
    CountryComponent,
    AddCountryComponent,
    DestiantionComponent,
    AddDestiantionComponent,
    AddImagesComponent,
    ViewImagesComponent,
    HomeComponent
  ],
  imports: [
    NgxSpinnerModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    SwiperModule,
    FontAwesomeModule,
    MatExpansionModule,
    NgxPaginationModule
  ],
  providers: [RoleGuard,
    tokenInterceptor,
    { provide: LocationStrategy, useClass: HashLocationStrategy }],
  entryComponents: [FilterModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
