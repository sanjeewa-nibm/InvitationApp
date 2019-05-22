import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseApp } from '@angular/fire';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { AuthService } from '../Services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  user$: Observable<firebase.User>;
  

  constructor(public auth: AuthService) {
    // afAuth.authState.subscribe(user=>this.user = user);
    // this.user$ = auth.authState;
   }

  logout() {
    alert('Sign Out Successful');
    // this.afAuth.auth.signOut();
    this.auth.logout();
  }
}
