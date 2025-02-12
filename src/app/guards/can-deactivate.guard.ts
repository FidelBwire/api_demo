import { Injectable } from '@angular/core';
import {
	ActivatedRouteSnapshot,
	CanDeactivate,
	CanActivateFn,
	GuardResult,
	MaybeAsync,
	Router,
	RouterStateSnapshot,
} from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { SalesComponent } from '../components/admin/pages/sales/sales.component';

@Injectable({
	providedIn: 'root',
})
export class CanDeactivateGuard implements CanDeactivate<SalesComponent> {
	constructor(
		private router: Router // private authService: AuthService
	) {}

	canDeactivate(): boolean {
		// let canUserDeactivate: boolean = false;

		// if (canUserDeactivate) {
		// 	alert('Point 1');
		// 	return false;
		// } else {
		// 	alert('Point 2');
		// 	return true;
		// }
		return false;
	}
}
