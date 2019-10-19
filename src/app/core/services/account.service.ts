import { Injectable } from '@angular/core';
import { QueryResultsModel } from '@logixtek/data-table';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '@app/shared/constants/api.constant';

const API_ACCOUNT_URL = API_URL.API_ACCOUNT_URL;

@Injectable()
export class AccountService {
	constructor(private http: HttpClient) {}

	loadAccountB2CByCode(userName: string) {
		let result: Observable<QueryResultsModel>;
		const url = API_ACCOUNT_URL + `${userName}`;

		result = this.http.get<any>(url);
		return result;
	}

	changeAccountB2CStatusbyUserName(userName: string, currentStatus: boolean) {
		const body = { accountEnabled: currentStatus };
		const url = API_ACCOUNT_URL + `${userName}/status`;

		return this.http.put<any>(url, body);
	}

	resetAccountPassword(userName: string, password: string) {
		const body = { newPassword: password };
		const url = API_ACCOUNT_URL + `${userName}/password`;
		return this.http.put<any>(url, body);
	}
}
