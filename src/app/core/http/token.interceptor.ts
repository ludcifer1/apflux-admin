import {
	HttpEvent,
	HttpHandler,
	HttpHeaders,
	HttpInterceptor,
	HttpRequest
} from '@angular/common/http';

import { AuthenticationService } from '@app/core/auth/authentication.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
	constructor(public auth: AuthenticationService) {}
	intercept(
		request: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		if (request.url.indexOf(environment.api.HOST) !== -1) {
			request = request.clone({
				setHeaders: { Authorization: `Bearer ${this.auth.getToken()}` }
			});
		}
		return next.handle(request);
	}
}
