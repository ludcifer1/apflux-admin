import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthenticationGuard implements CanActivate {
	constructor(
		private router: Router,
		private authService: AuthenticationService
	) {}

	canActivate(route: ActivatedRouteSnapshot) {
		if (this.authService.isLoggedIn()) {
			return true;
		}
		this.authService.redirectToLoginPage();
		// this.router.navigate(['/', 'id_token']);
		return false;
	}
}
