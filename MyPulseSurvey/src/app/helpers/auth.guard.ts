

import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { UserService } from '../services/user.service';
import * as _ from 'lodash';
import { AuthenticateResponse } from '../models/authenticate-response';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  public currentUserSubject: BehaviorSubject<AuthenticateResponse>;
  public currentUser: Observable<AuthenticateResponse>;
  isUser: boolean = false;

  constructor(
    private router: Router,
    private userService: UserService,

  ) {

    this.currentUserSubject = new BehaviorSubject<AuthenticateResponse>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
    this.currentUser = this.currentUserSubject.asObservable();

  }


  public get currentUserValue(): AuthenticateResponse {

    return this.currentUserSubject.value;
  }

  currentLang() {
    return this.userService.currentLangValue;
  }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
 
  
    if (!this.userService.isAuthorized()) {
      this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url } });
      return false;
    }
  //   else {
  //     let isPermission = route.data.roles.find((x: any) =>this.userService.currentUserValue?.roles.includes(x) );
  //     let isAnonymous= route.data.roles.find((x:any)=>x=='Anonymous');
  //    console.log("isPermission",isPermission)
  //    console.log("isAnonymous",isAnonymous)
  //    console.log("route.data.roles",route.data.roles)
  //     if(!isPermission && !isAnonymous)
  //       this.router.navigate(['/unauthorized']);

  //  if (this.userService.hasRole("Superadmin") &&  this.userService.isAuthorized() && isAnonymous) {
  //     this.router.navigate(['/admin/dashboard']);
  //   }

  //   if (this.userService.hasRole("Admin") &&  this.userService.isAuthorized() && isAnonymous) {
  //     this.router.navigate(['/panel/dashboard']);
  //   }
  
      return true;
    



  }


}
