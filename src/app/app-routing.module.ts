import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserSignupComponent } from './components/user-signup/user-signup.component';
import { PlacesComponent } from './components/places/places.component';
import { DescriptionComponent } from './components/description/description.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { PackageComponent } from './components/package/package.component';
import { StateComponent } from './components/state/state.component';
import { AddStateComponent } from './components/state/add-state/add-state.component';
import { CountryComponent } from './components/country/country.component';
import { AddCountryComponent } from './components/country/add-country/add-country.component';
import { DestiantionComponent } from './components/destiantion/destiantion.component';
import { AddDestiantionComponent } from './components/destiantion/add-destiantion/add-destiantion.component';
import { AddImagesComponent } from './components/imageUpload/add-images/add-images.component';
import { ViewImagesComponent } from './components/imageUpload/view-images/view-images.component';
import { RoleGuard } from './components/shared/guard/role.guard';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  // {
  //   path: 'Package',
  //   component: PackageComponent,
  // },
  // // {
  // //   path: 'AboutUs',
  // //   component: AboutusComponent,
  // // }, {
  // //   path: 'City/:city',
  // //   component: PlacesComponent,
  // // },

  // //State
  // { path: 'ListState', component: StateComponent },
  // { path: 'State', component: AddStateComponent },
  // { path: 'State/:StateId', component: AddStateComponent },

  // //Country
  // { path: 'ListCountry', component: CountryComponent },
  // { path: 'Country', component: AddCountryComponent },
  // { path: 'Country/:CountryId', component: AddCountryComponent },

  // //Destinations
  // { path: 'ListDestination', component: DestiantionComponent },
  // { path: 'Destination', component: AddDestiantionComponent },
  // { path: 'Destination/:DestinationId', component: AddDestiantionComponent },

  // //Images Upload
  // { path: 'AddImages', component: AddImagesComponent },
  // { path: 'ViewImages', component: ViewImagesComponent },

  // // {
  // //   path: 'Description/:DescId',
  // //   component: DescriptionComponent,
  // // }, {
  // //   path: 'Booking/:BookingId',
  // //   loadChildren: () => import('./components/booking/booking.module').then(m => m.BookingModule)
  // // },
  // {
  //   path: 'LoginUser',
  //   component: UserLoginComponent,
  // }, {
  //   path: 'SignupUser',
  //   component: UserSignupComponent,
  // }, {
  //   path: 'Company',
  //   loadChildren: () => import('./components/agent/agent.module').then(m => m.AgentModule)
  // },
  // {
  //   path: '',
  //   redirectTo: 'LoginUser',
  //   pathMatch: 'full'
  // }


  // new 

  {
    path: "", component: HomeComponent, canActivate: [RoleGuard],
    children: [
      { component: PackageComponent, path: "Package" },
      //State
      { path: 'ListState', component: StateComponent },
      { path: 'State', component: AddStateComponent },
      { path: 'State/:StateId', component: AddStateComponent },

      //Country
      { path: 'ListCountry', component: CountryComponent },
      { path: 'Country', component: AddCountryComponent },
      { path: 'Country/:CountryId', component: AddCountryComponent },

      //Destinations
      { path: 'ListDestination', component: DestiantionComponent },
      { path: 'Destination', component: AddDestiantionComponent },
      { path: 'Destination/:DestinationId', component: AddDestiantionComponent },

      //Images Upload
      { path: 'AddImages', component: AddImagesComponent },
      { path: 'ViewImages', component: ViewImagesComponent },

    ]
  },
  { path: "Login", component: UserLoginComponent },
  { path: "**", pathMatch: "full", redirectTo: "/Login" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: [RoleGuard]
})
export class AppRoutingModule { }
