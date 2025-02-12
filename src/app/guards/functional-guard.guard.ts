import { inject, } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const functionalGuardGuard: CanActivateFn = (route, state) => {
	let isUserAuthenticated: boolean = false;

	let router = inject(Router);
	router.navigate(['/login'])

	return false;
};

// @Injectable({
// 	providedIn: 'root',
// })
// export class AuthGuard implements CanActivate {
// 	constructor(private router: Router,
// 		// private authService: AuthService
// 	) {}

// 	canActivate(): boolean {
// 		let isUserAuthenticated: boolean = true;
// 		let isAnyFormPending: boolean = true;

// 		if (isUserAuthenticated && !isAnyFormPending) {
// 			return true;
// 		} else {
// 			this.router.navigateByUrl('login');
// 			return false;
// 		}
// 	}
// }


// functionalGuardGuard(route, state): CanActivateFn {
// 	return true;
// }
