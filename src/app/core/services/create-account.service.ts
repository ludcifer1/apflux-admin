import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
	QueryResultsModel,
	QueryParamsModel,
	DataTableService
} from '@logixtek/data-table';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { API_URL } from '@app/shared/constants/api.constant';

@Injectable()
export class CreateAccountService extends DataTableService {
	constructor(private http: HttpClient) {
		super();
	}

	getAllNoAccountProfiles(queryParams: QueryParamsModel): Observable<any> {
		const url =  API_URL.PROFILE_CREATION_URL;
		const params = this.getSearchParams(queryParams);

		let result: Observable<QueryResultsModel>;
		result = this.http.get(url, { params }).pipe(
			map((res: any) => {
				if (!res) {
					return new QueryResultsModel();
				}
				// TODO: handle result and mapdata here
				return new QueryResultsModel({
					items: res.result.items,
					totalCount: res.result.totalCount
				});
			})
		);
		return result;
	}

	createAccountbyCodeandType(salesHubCode: string, userType: string) {
		const url =  API_URL.API_ACCOUNT_URL;
		let result: Observable<any>;
		const body = { salesHubCode: salesHubCode, userType: userType };
		result = this.http.post(url, body);

		return result;
	}
	getAllAccountType() {
		const url =  API_URL.API_ACCOUNTTYPE_FILTER_URL;
		return this.http.get(url).pipe(
			map((res: any) => {
				if (res) {
					return res.result;
				}
			})
		);
	}
}
