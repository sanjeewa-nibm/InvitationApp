import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseApp } from '@angular/fire';
import * as firebase from 'firebase';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  user: firebase.User;
  

  constructor(private afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(user=>this.user = user);
   }

  logout() {
    alert('Sign Out Successful');
    this.afAuth.auth.signOut();
  }
}
