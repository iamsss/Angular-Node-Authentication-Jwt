import { AuthServiceService } from './../services/auth-service.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router  } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authServiceService: AuthServiceService,
              private router: Router) { }

  canActivate(): boolean {
    if (this.authServiceService.loggedIn()) {
       return true;
    } else  {
      return false;
    }
  }
}
