import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {
  constructor(public router : Router,
              public authservice : AuthService){}
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(!this.isAuthenticated()){
        this.router.navigate(['']);
        return false;
      }
    return true;
  }

  private isAuthenticated() : boolean{
    const token = localStorage.getItem('acessToken');

    //if its null
    if(!token) return false;

    const jwtHelper = new JwtHelperService();

    return !jwtHelper.isTokenExpired(token);
  }
  
}
