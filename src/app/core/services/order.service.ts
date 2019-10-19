import { Injectable } from '@angular/core';
import { DataTableService, QueryResultsModel } from '@logixtek/data-table';
import { HttpClient } from '@angular/common/http';

import { API_URL } from '@app/shared/constants/api.constant';

@Injectable()
export class OrderService extends DataTableService {
	constructor(private http: HttpClient) {
		super();
	}

	getOrderByCode(code: any) {
		const url = API_URL.OPERATION_SEARCH_ORDER_URL;
		return this.http.get(url + `${code}`);
	}
}
