import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { GaurdService } from '../gaurd.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private gaurdService: GaurdService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if (this.gaurdService.userAuthorization()) {
        return true;
      }
      
      alert("You Are Un Authorized!");
        if (window.location.pathname === '/home') {
          this.router.navigate(['login']);
        } 
    
      return true;
    
  }
  
}
