import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AuthGurd implements CanActivate {

  constructor(private auth: AuthService,private router:Router) { }

  // canActivate() { 
  canActivate(route,state: RouterStateSnapshot) { 


    // this.auth.user$.subscribe(user => {
      return this.auth.user$.pipe(map(user => {
      if (user)
       {
          return true;
       }
      else 
      {
        this.router.navigate(['/login'],{queryParams : { returnUrl : state.url }});
        return false;
      }
    }));
  }

}
