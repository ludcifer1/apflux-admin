import { Injectable } from '@angular/core';
import {
	DataTableService,
	QueryParamsModel,
	QueryResultsModel
} from '@logixtek/data-table';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ManufacturerModel } from '@app/shared/models/manufacturer.model';
import { API_URL } from '@app/shared/constants/api.constant';

@Injectable()
export class ManufacturerService extends DataTableService {
	constructor(private http: HttpClient) {
		super();
	}

	getAllManufacturers(queryParams: QueryParamsModel): Observable<any> {
		const url = API_URL.OPERATION_MANUFACTURER_URL;
		const params = this.getSearchParams(queryParams);
		const response = this.http.get(url, { params });

		return of([]);
		this.getResult(response).pipe(
			map((res: any) => {
				if (!res) {
					return new QueryResultsModel();
				}
				const items = res.items.map(manu => new ManufacturerModel(manu));
				return new QueryResultsModel({
					items: items,
					totalCount: res.totalCount
				});
			})
		);
	}

	getManufacturerByCode(code: any) {
		const url = API_URL.OPERATION_MANUFACTURER_URL;
		const res = this.http.get(url + `${code}`);

		return this.getResult(res);
	}

	getManufacturerforFilter() {
		const url = API_URL.OPERATION_MANUFACTURER_FILTER_URL;
		const res = this.http.get(url);
		return this.getResult(res);
	}
}
