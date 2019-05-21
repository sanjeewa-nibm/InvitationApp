import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  constructor(private afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(x=>console.log(x));
   }

  logout() {
    alert('Sign Out Successful');
    this.afAuth.auth.signOut();
  }
}
