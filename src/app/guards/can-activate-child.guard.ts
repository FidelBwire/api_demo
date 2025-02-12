import { Injectable } from '@angular/core';
import {
	ActivatedRouteSnapshot,
	CanActivateChild,
	CanActivateFn,
	GuardResult,
	MaybeAsync,
	Router,
	RouterStateSnapshot,
} from '@angular/router';

@Injectable({
	providedIn: 'root',
})
export class CanActivateChildGuard implements CanActivateChild {
	constructor(
		private router: Router // private authService: AuthService
	) {}

	canActivateChild(): boolean {
		let isUserAuthenticated: boolean = true;
		let isAnyFormPending: boolean = true;

		if (isUserAuthenticated && !isAnyFormPending) {
      return true;
    } else {
      this.router.navigateByUrl('login');
      return false;
    }
	}
}
