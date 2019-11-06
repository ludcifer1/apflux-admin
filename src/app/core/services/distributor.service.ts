import { Injectable } from '@angular/core';
import {
	DataTableService,
	QueryParamsModel,
	QueryResultsModel
} from '@logixtek/data-table';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { DistributorModel } from '@app/shared/models/distributor.model';
import { API_URL, FLUX_URL } from '@app/shared/constants/api.constant';

@Injectable()
export class DistributorService extends DataTableService {
	constructor(private http: HttpClient) {
		super();
	}

	getAllDistributors(
		queryParams: QueryParamsModel
	): Observable<QueryResultsModel> {
		const url = FLUX_URL.ALL_CLASS_URL;
		const params = this.getSearchParams(queryParams);
		const response = this.http.get(url, { params });
		return response.pipe(
			map((res: any) => {
				if (!res) {
					return new QueryResultsModel();
				}
				const items = res.data.map(dt => dt);
				return new QueryResultsModel({
					items: items,
					totalCount: res.totalCount
				});
			})
		);
	}

	getDistributorByCode(code: any) {
		const url = FLUX_URL.ALL_CLASS_URL;
		const res = this.http.get(url + `${code}`);

		return this.getResult(res);
	}
}
