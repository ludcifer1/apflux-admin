import * as Msal from 'msal';

import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '@env/environment';
import { AuthConfigs } from './authentication.config';

const KEYS = {
	ACQUIRE_TOKEN_FAILED: 'msal:acquireTokenFailure',
	LOGIN_FAILURE: 'msal:loginFailure',
	LOGIN_SUCCESS: 'msal:loginSuccess',
	FORGET_PASSWORD: 'AADB2C90118',
	TOKEN_EXPIRED: 'AADB2C90077',
	TOKEN_ID: 'msal.idtoken',
	TOKEN_ACCESS: 'msal.accesstoken'
};

const jwt = new JwtHelperService();

@Injectable()
export class AuthenticationService {
	private msalInstance: Msal.UserAgentApplication;

	constructor() {
		const options = {
			auth: environment.msal,
			cache: { cacheLocation: 'localStorage' },
			system: { loadFrameTimeout: 30000 }
		} as Msal.Configuration;
		this.msalInstance = new Msal.UserAgentApplication(options);

		this.msalInstance.handleRedirectCallback((error, response) => {
			if (error) {
				// TO DO: handle error
			}

			if (response) {
				// TO DO: handle redirect response
			}
		});
	}

	redirectToLoginPage() {
		const { scopes } = environment.msal;
		this.msalInstance.loginRedirect({ scopes });
	}

	logout() {
		localStorage.clear();
		this.msalInstance.logout();
	}

	acquireAccessToken() {
		const { scopes } = environment.msal;
		return this.msalInstance
			.acquireTokenSilent({ scopes })
			.then(response => {
				localStorage.setItem(KEYS.TOKEN_ACCESS, response.accessToken);
				return response.accessToken;
			})
			.catch(silentError => {
				// if (silentError.name === 'InteractionRequiredAuthError') {
				// 	return this.msalInstance
				// 		.acquireTokenPopup({ scopes })
				// 		.then(response => {
				// 			localStorage.setItem(KEYS.TOKEN_ACCESS, response.accessToken);
				// 			return response.accessToken;
				// 		})
				// 		.catch(popUpError => {
				// 			throw new Error(popUpError);
				// 		});
				// }
				throw new Error(silentError);
			});
	}

	getUser() {
		const user = this.msalInstance.getAccount();
		return user;
	}

	getToken(): string {
		const token: string = window.localStorage.getItem(KEYS.TOKEN_ACCESS);
		return token;
	}

	isLoggedIn() {
		const account = this.msalInstance.getAccount();
		return Boolean(account);
	}

	isTokenExpired() {
		const token = this.getToken();
		return jwt.isTokenExpired(token);
	}
}
