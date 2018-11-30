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


import { UserService } from './../services/user.service';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FeedbackComponent } from './components/feedback/feedback.component';


const routes: Routes = [

  { path: 'homepage', component: HomepageComponent},
  { path : '', redirectTo: 'homepage', pathMatch: 'full'},
  
  { path: 'feedback', component: FeedbackComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
  
    HomepageComponent,
    FeedbackComponent,
    
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
