import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguardService } from '../services/authguard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private Auth: AuthguardService,private router : Router){

  }
  canActivate(): boolean {  
    if (!this.Auth.gettoken()) {  
        this.router.navigateByUrl("/adminlogin");  
    }  
    return this.Auth.gettoken();
  }
  
}
