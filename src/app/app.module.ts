

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CustregistrationComponent } from './custregistration/custregistration.component';
import {CustregistrationService} from './Services/custregistration.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';

import { environment } from './../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { LoginComponent } from './login/login.component';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './Services/auth.service';
import { AuthGurd } from './Services/auth-gurd.service';
import { UserService } from './Services/user.service';
import { AdminAuthGuard } from './Services/admin-auth-guard.service';


@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      CustregistrationComponent,
      CustomerListComponent,
      LoginComponent
   ],
   imports: [
      BrowserModule,
      HttpModule,
      ReactiveFormsModule,
      FormsModule,
      AngularFireAuthModule,
      AngularFireDatabaseModule,
      //fordatabase\\r\\nAngularFirestoreModule,
      AngularFireModule.initializeApp(environment.firebase),
      RouterModule.forRoot([
         {
            path: '',
            component: HomeComponent
         },
         { path: 'login', component: LoginComponent },
         { path: 'cust-reg', component: CustregistrationComponent 
         , canActivate : [AuthGurd,AdminAuthGuard]}
         
       ])
   ],
   providers: [
      AngularFireDatabase,
      AuthService,
      AuthGurd,
      AdminAuthGuard,
      UserService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
