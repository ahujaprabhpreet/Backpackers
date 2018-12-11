// built-in
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
// components
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
//routes
import { appRoutes } from './routes';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserService } from './service/user.service';
import { UserProfileComponent } from './user-profile/user-profile.component';

//other
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AdminComponent } from './admin/admin.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { ManageBlogsComponent } from './admin/manage-blogs/manage-blogs.component';
import { ManageFeedbacksComponent } from './admin/manage-feedbacks/manage-feedbacks.component';
import { ManageBookingsComponent } from './admin/manage-bookings/manage-bookings.component';
import { CreatePackageComponent } from './admin/create-package/create-package.component';
import { ManagePackageComponent } from './admin/manage-package/manage-package.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PackageService } from './service/package.service';
import { PackageComponent } from './package/package.component';
import { PaymentComponent } from './payment/payment.component';
import { CartDisplayComponent } from './cart-display/cart-display.component';
import { cartDisplayService } from './service/cartDisplay.service';

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
    ManageBlogsComponent,
    ManageFeedbacksComponent,
    ManageBookingsComponent,
    CreatePackageComponent,
    ManagePackageComponent,
    HomepageComponent,
    AboutusComponent,
    PackageComponent,
    PaymentComponent,
    CartDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
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
  UserService,
  PackageService,
  cartDisplayService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
