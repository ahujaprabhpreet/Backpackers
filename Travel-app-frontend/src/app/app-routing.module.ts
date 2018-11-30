import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {FeedbackComponent} from './components/feedback/feedback.component';

const routes: Routes = [  { path: 'feedback',component: FeedbackComponent} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  static components =[
 
    FeedbackComponent
  ];
}
