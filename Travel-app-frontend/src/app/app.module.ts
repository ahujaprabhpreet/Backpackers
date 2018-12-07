// built-in
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
// components
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
//routes
import { appRoutes } from './routes';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserService } from './shared/user.service';
import { UserProfileComponent } from './user-profile/user-profile.component';

//other
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AdminComponent } from './admin/admin.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { ManageAboutusComponent } from './admin/manage-aboutus/manage-aboutus.component';
import { ManageBlogsComponent } from './admin/manage-blogs/manage-blogs.component';
import { ManageFeedbacksComponent } from './admin/manage-feedbacks/manage-feedbacks.component';
import { ManageBookingsComponent } from './admin/manage-bookings/manage-bookings.component';
import { CreatePackageComponent } from './admin/create-package/create-package.component';
import { ManagePackageComponent } from './admin/manage-package/manage-package.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutusComponent } from './aboutus/aboutus.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
    UserProfileComponent,
    SignInComponent,
    NavBarComponent,
    AdminComponent,
    AdminHomeComponent,
    ManageAboutusComponent,
    ManageBlogsComponent,
    ManageFeedbacksComponent,
    ManageBookingsComponent,
    CreatePackageComponent,
    ManagePackageComponent,
    HomepageComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },
  AuthGuard,
  UserService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
