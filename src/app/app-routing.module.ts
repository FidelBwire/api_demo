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
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { TeamPageComponent } from './pages/team-page/team-page.component';

const routes: Routes = [
	{
		path: 'admin',
		component: AdminComponent,
		// canActivate: [functionalGuardGuard

		// ],
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
  { path: '', component: HomePageComponent },
  { path: 'about-us', component: AboutUsPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'services', component: ServicesPageComponent },
  { path: 'team', component: TeamPageComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
