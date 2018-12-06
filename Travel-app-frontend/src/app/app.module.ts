import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatIconModule, MatButtonModule, MatCardModule, MatTableModule, MatDividerModule, MatSnackBarModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PackageComponent} from './components/package/package.component';
import {EuropeComponent} from './components/package/europe/europe.component';
import { UserService } from './../services/user.service';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import {CheckavailabilityafricaComponent} from './components/package/africa/checkavailabilityafrica/checkavailabilityafrica.component';
import { CheckavailabilityComponent } from './components/package/europe/checkavailability/checkavailability.component';
import { AustraliaComponent } from './components/package/australia/australia.component';
import { AsiaComponent } from './components/package/asia/asia.component';
import { AfricaComponent } from './components/package/africa/africa.component';
import { NorthamericaComponent } from './components/package/northamerica/northamerica.component';
import { SouthamericaComponent } from './components/package/southamerica/southamerica.component';
import { CheckavailabilityasiaComponent } from './components/package/asia/checkavailabilityasia/checkavailabilityasia.component';
import { CheckavailabilitynorthamericaComponent } from './components/package/northamerica/checkavailabilitynorthamerica/checkavailabilitynorthamerica.component';
import { CheckavailabilitysouthamericaComponent } from './components/package/southamerica/checkavailabilitysouthamerica/checkavailabilitysouthamerica.component';
import { CheckavailabilityaustraliaComponent } from './components/package/australia/checkavailabilityaustralia/checkavailabilityaustralia.component';




const routes: Routes = [

  { path: 'homepage', component: HomepageComponent},
  { path : '', redirectTo: 'homepage', pathMatch: 'full'},
  { path : 'feedback', component : FeedbackComponent},
  { path : 'package', component : PackageComponent},
  { path : 'package/africa/checkavailability', component: CheckavailabilityafricaComponent},
  {  path : 'package/europe', component : EuropeComponent},
  {path : 'package/africa', component : AfricaComponent},
  {path : 'package/asia', component : AsiaComponent},
  {path : 'package/australia', component : AustraliaComponent},
  {path : 'package/northamerica', component : NorthamericaComponent},
  {path : 'package/southamerica', component : SouthamericaComponent},
  {path: 'package/europe/checkavailability', component: CheckavailabilityComponent},
  {path: 'package/asia/checkavailability', component: CheckavailabilityasiaComponent},
  {path: 'package/australia/checkavailability', component: CheckavailabilityaustraliaComponent},
  {path: 'package/northamerica/checkavailability', component: CheckavailabilitynorthamericaComponent},
  {path: 'package/southamerica/checkavailability', component: CheckavailabilitysouthamericaComponent},
  { path: 'feedback', component: FeedbackComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CheckavailabilityafricaComponent,
    HomepageComponent,
    FeedbackComponent,
    PackageComponent,
    EuropeComponent,
    CheckavailabilityComponent,
    AustraliaComponent,
    AsiaComponent,
    AfricaComponent,
    NorthamericaComponent,
    SouthamericaComponent,
    CheckavailabilityasiaComponent,
    CheckavailabilitynorthamericaComponent,
    CheckavailabilitysouthamericaComponent,
    CheckavailabilityaustraliaComponent
  
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    MatToolbarModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatOptionModule, 
    MatSelectModule, 
    MatIconModule, 
    MatButtonModule, 
    MatCardModule, 
    MatTableModule, 
    MatDividerModule, 
    MatSnackBarModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
