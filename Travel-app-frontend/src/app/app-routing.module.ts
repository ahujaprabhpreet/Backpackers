import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FeedbackComponent} from './components/feedback/feedback.component';
import {PackageComponent} from './components/package/package.component';
import {EuropeComponent} from './components/package/europe/europe.component';
import {AsiaComponent} from './components/package/asia/asia.component';
import {AustraliaComponent} from './components/package/australia/australia.component';
import {NorthamericaComponent} from './components/package/northamerica/northamerica.component';
import {SouthamericaComponent} from './components/package/southamerica/southamerica.component';
import {AfricaComponent} from './components/package/africa/africa.component';
import {CheckavailabilityComponent} from './components/package/europe/checkavailability/checkavailability.component';
import {CheckavailabilityafricaComponent} from './components/package/africa/checkavailabilityafrica/checkavailabilityafrica.component';
const routes: Routes = [  { path: 'feedback',component: FeedbackComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  static components =[
    PackageComponent,
    FeedbackComponent,
    EuropeComponent,
    AsiaComponent,
    AustraliaComponent,
    NorthamericaComponent,
    SouthamericaComponent,
    AfricaComponent,
    CheckavailabilityComponent,
    CheckavailabilityafricaComponent
    
  ];
}
