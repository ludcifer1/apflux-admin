import env from './.env';
import { AuthConfigs } from '@app/core/auth/authentication.config';

// `.env.ts` is generated by the `npm run env` command

export const environment = {
	production: false,
	isMockEnabled: false,
	version: env.npm_package_version + '-dev',
	serverUrl: '/api',
	defaultLanguage: 'Tiếng Việt',
	supportedLanguages: ['English', 'Tiếng Việt'],
	msal: {
		clientId: 'c05cc9db-a80e-4369-8a15-9bbff1eb0666',
		authority:
			'https://login.microsoftonline.com/tfp/salehub.onmicrosoft.com/B2C_1A_operator',
		validateAuthority: true,
		redirectUri: 'https://dev-ops.azurewebsites.net',
		navigateToLoginRequestUrl: false,
		scopes: [
			'https://salehub.onmicrosoft.com/apidev/read',
			'https://salehub.onmicrosoft.com/apidev/write'
		]
	} as AuthConfigs,
	api: {
		// COMMON
		ROOT: 'https://apidev.hubs.vn/',
		HOST: 'apidev.hubs.vn',
		// OPERATION
		OPERATION_ROOT: 'OperationPortal/',
		// MANUFACTURER
		MANUFACTURER_ROOT: 'Manufacturers/',
		// MANUFACTURER
		MANUFACTURER_PROFILES_ROOT: 'ManufacturerProfiles/',
		// MANUFACTURER
		DISTRIBUTOR_PROFILES_ROOT: 'DistributorProfiles/',
		// RETAILER PROFILES
		RETAILER_PROFILES_ROOT: 'RetailerProfiles/',
		// ORDER
		ORDERS_ROOT: 'Orders/'
	}
};
