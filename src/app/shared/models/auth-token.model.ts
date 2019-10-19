import * as decode from 'jwt-decode';
import * as moment from 'moment';

export class AuthTokenModel {
	name: string;
	authTime: Date;
	expiredTime: Date;
	postalCode: string;

	constructor(token: string) {
		const { name, auth_time, exp, postalCode, oid, sub } = decode(token);
		this.name = name;
		this.authTime = moment(auth_time).toDate();
		this.expiredTime = moment(exp).toDate();
		this.postalCode = postalCode;
	}
}
