import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { AdminComponent } from './admin/admin.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './auth/auth.guard';
import { HomepageComponent } from './homepage/homepage.component';
import { CreatePackageComponent } from './admin/create-package/create-package.component';
import { PackageComponent } from './package/package.component';
import { CartDisplayComponent } from './cart-display/cart-display.component';
import { PaymentComponent } from './payment/payment.component';

export const appRoutes: Routes = [
    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    {
        path: 'userprofile', component: UserProfileComponent, canActivate:[AuthGuard]
    },
    {
        path: '', redirectTo: '/', pathMatch: 'full'
    },
    {
        path: 'admin', component: AdminComponent, canActivate:[AuthGuard]
    },
    {
        path: 'homepage', component: HomepageComponent, canActivate:[AuthGuard]
    },
    {
        path: 'aboutus', component: AboutusComponent, canActivate:[AuthGuard]
    },
    {
        path: 'createPackage', component: CreatePackageComponent, canActivate:[AuthGuard]
    },
    {
        path: 'package', component: PackageComponent, canActivate:[AuthGuard]
    },
    { 
        path: 'cart', component: CartDisplayComponent  
    },
    { 
        path: 'payment', component:PaymentComponent  
    }
];