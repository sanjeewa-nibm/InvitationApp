import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';
import { UserService } from './user.service';
import { switchMap } from 'rxjs/operators';   


@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(private auth: AuthService, private userService: UserService) { }


  // canActivate(): Observable<boolean> { 
  //    return this.auth.user$.pipe(
  //    switchMap(user => {
  //      return this.userService.get(user.uid);
  //    })
  //     .map(appUser => appUser.isAdmin));
  // }

  canActivate(): Observable<boolean> {
    return this.auth.user$
    .pipe(switchMap(user => this.userService.get(user.uid).valueChanges()))
    .pipe(map(appUser => appUser.isAdmin));
   }

}
