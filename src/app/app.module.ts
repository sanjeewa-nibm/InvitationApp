

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CustregistrationComponent } from './custregistration/custregistration.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { environment } from './../environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustregistrationComponent
    ],
  imports: [
    BrowserModule,
     HttpModule,
     FormsModule,
     AngularFireModule.initializeApp(environment.firebase),
     AngularFireDatabaseModule, // for database

     RouterModule.forRoot([
      {
         path: '',
         component: HomeComponent
      },
      { path: 'cust-reg', component: CustregistrationComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
