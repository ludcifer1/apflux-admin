import {
	HttpErrorResponse,
	HttpEvent,
	HttpHandler,
	HttpInterceptor,
	HttpRequest
} from '@angular/common/http';
import { Observable, from, of, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

import { AuthenticationService } from '../auth/authentication.service';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

/**
 * Prefixes all requests with `environment.serverUrl`.
 */
@Injectable()
export class ApiPrefixInterceptor implements HttpInterceptor {
	constructor(private authService: AuthenticationService) {}

	intercept(
		request: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		if (request.url.indexOf(environment.api.ROOT) !== -1) {
			const token = this.authService.getToken();
			if (!token || this.authService.isTokenExpired()) {
				// if token is invalid or expired, we refresh the token
				return from(this.authService.acquireAccessToken()).pipe(
					catchError(error =>
						throwError(`Failed to acquire access_token: ${error}`)
					),
					// then continue the request by recursively call this intercept
					switchMap(res => (res ? this.intercept(request, next) : of(null)))
				);
			}
			request = request.clone({
				setHeaders: { Authorization: `Bearer ${token}` }
			});
		}
		return next.handle(request);
	}
}
