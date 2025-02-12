import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivateFn } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { SalesComponent } from './components/admin/pages/sales/sales.component';
import { AccountsComponent } from './components/admin/pages/accounts/accounts.component';
import { CanActivateChildGuard } from './guards/can-activate-child.guard';
import { CanDeactivateGuard } from './guards/can-deactivate.guard';
import { functionalGuardGuard } from './guards/functional-guard.guard';

const routes: Routes = [
	{
		path: 'admin',
		component: AdminComponent,
		canActivate: [functionalGuardGuard

		],
		// canActivateChild: [CanActivateChildGuard],
		children: [
			{
				path: 'sales',
				component: SalesComponent,
				canDeactivate: [CanDeactivateGuard],
			},
			{ path: 'accounts', component: AccountsComponent },
		],
	},
	{ path: 'login', component: LoginComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
