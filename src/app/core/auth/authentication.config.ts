import { AuthOptions } from 'msal/lib-commonjs/Configuration';

export interface AuthConfigs extends AuthOptions {
	scopes: string[];
}
