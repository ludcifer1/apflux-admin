import {
	DataTableService,
	QueryParamsModel,
	QueryResultsModel
} from '@logixtek/data-table';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { tap, map } from 'rxjs/operators';

const API_DEVICE_URL = '/devices';
const API_DEVICE_HISTORY_URL = '/deviceHistory';

@Injectable()
export class DeviceService extends DataTableService {
	constructor(private http: HttpClient) {
		super();
	}

	getAllDevice(queryParams: QueryParamsModel): Observable<QueryResultsModel> {
		const url = API_DEVICE_URL;
		const params = this.getSearchParams(queryParams);
		// TODO:
		// const response = this.http.get(url, { params });
		// return this.getResult(response).pipe(
		// 	tap(res => {
		// 	})
		// );
		let result: Observable<QueryResultsModel>;
		result = this.http.get(url).pipe(
			map((res: any) => {
				if (!res) {
					return new QueryResultsModel();
				}
				return new QueryResultsModel({ items: res, totalCount: 4 });
			})
		);
		return result;
	}

	getDeviceInfobyCode(
		code: string | number | any
	): Observable<QueryResultsModel> {
		const url = API_DEVICE_URL;
		let result: Observable<QueryResultsModel>;
		result = this.http.get(url).pipe(
			map((res: any) => {
				if (!res) {
					return new QueryResultsModel();
				}
				const item = res[code - 1];
				return item;
			})
		);
		return result;
	}
}
