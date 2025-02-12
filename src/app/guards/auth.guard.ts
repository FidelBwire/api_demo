import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
	providedIn: 'root',
})
export class AuthGuard implements CanActivate {
	constructor(private router: Router,
		// private authService: AuthService
	) {}

	canActivate(): boolean {
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
















// export const AuthGuard: CanActivateFn = (route, state) => {
//   return false;
// };

