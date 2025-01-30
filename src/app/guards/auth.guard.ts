import { CanActivateFn } from '@angular/router';

export const AuthGuard: CanActivateFn = (route, state) => {
  return false;
};

// Deprecated
// export class authGuard implements CanActivate {
    // constructor(private router: Route) {

    // }

    // canActivate() {
    //   if (user.isNotLoggedIn)
    //     this.router.navigateByUrl('login');
    //   else return true;
    // }

// }
