import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';


import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import * as firebase from 'firebase';
import { environment } from './../environments/environment';
import { AuthService } from './Services/auth.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// const settings = {timestampsInSnapshots: true};

export class AppComponent {
  title = 'Invitation App';

  httpdata;

  constructor(private auth: AuthService, router: Router) {

    auth.user$.subscribe(user => {
      if (user) {
        let returnUrl = localStorage.getItem('returnUrl');
        router.navigateByUrl(returnUrl);
      }
    });

    const config = {
      // copy firebase configuration from your firebase project
    };

  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    const settings = { timestampsInSnapshots: true };



    firebase.firestore().settings(settings);
    var database = firebase.database();

    // firebase.firestore().settings(settings);

    //  this.http.get('http://jsonplaceholder.typicode.com/users')
    // //  .subscribe((data) => console.log(data.json()));
    //     //  .pipe(map(res => console.log(res.json())))
    //     .subscribe((data) => this.displaydata(data));

    // this.http.get('http://jsonplaceholder.typicode.com/users')
    //   .pipe(map(response => response.json()))
    //   .subscribe((data) => this.displaydata(data));
  }

  //    displaydata(data) {
  //      this.httpdata = data;
  //      console.log(data);
  //     }
  //   onClickSubmit(data) {
  //     alert('Entered Email id : ' + data.emailid);
  //  }
}
