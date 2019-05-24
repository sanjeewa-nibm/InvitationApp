import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth'; 
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor(private auth: AuthService,private router: Router) { 
  }

  login() { 
    // this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    this.auth.login();
    // this.router.navigate(['']);
  }

}
