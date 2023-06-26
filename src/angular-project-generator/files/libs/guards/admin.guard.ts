import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const user = this.authService.userValue;
    if (this.checkAdmin(user.roles)) {
      return true;
    }

    this.router.navigate(['auth/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }

  checkAdmin(user: any){
    let isAdmin = false;
    user.forEach((role : any) => {
      if(role.role === "ADMIN") isAdmin = true;
    });
    return isAdmin;
  }

}
