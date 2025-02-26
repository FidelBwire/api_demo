import {
	HttpEvent,
	HttpHandler,
	HttpHeaders,
	HttpInterceptor,
	HttpProgressEvent,
	HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError, timeout } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class HttpInterceptorService implements HttpInterceptor {
	headers!: HttpHeaders;

	errorMessage!: string;
	errrStatus!: number;

	constructor(private authService: AuthService, private router: Router) {}

	intercept(
		req: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpProgressEvent<any>> {
		if (
			this.authService.isUserLoggedIn() &&
			this.authService.getAccessToken()
		) {
			this.headers = new HttpHeaders({
				Authorization: this.authService.getAccessToken(),
			});
		} else {
			this.headers = new HttpHeaders({});
		}

		let request = req.clone({
			headers: this.headers,
		});

		return next.handle(request).pipe(
			timeout(2000),
			catchError((err) => {
				if (err.error instanceof ErrorEvent) {
					// Handle errors on the client side
					this.errorMessage = err.error.message;
				} else {
					// this.errorMessage = err.error.message;
					this.errrStatus = err.error.status;

					if (this.errrStatus == 401) {

						this.router.navigateByUrl('/login');
					}
					else (this.errrStatus == 500) {
						this.errorMessage = 'Service unavailable. Please try again later'
					}
					// else


				}
			})
		);

		return throwError(() => new Error(this.errorMessage))
	}
}
