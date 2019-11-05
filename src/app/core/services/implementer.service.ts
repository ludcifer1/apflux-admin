import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
	DataTableService,
	QueryParamsModel,
	QueryResultsModel
} from '@logixtek/data-table';
import { Observable, of } from 'rxjs';
import { FLUX_URL } from '@app/shared/constants/api.constant';
import { map } from 'rxjs/operators';

@Injectable()
export class ImplementerService extends DataTableService {
	constructor(private http: HttpClient) {
		super();
	}
	getAllImplementers(
		queryParams: QueryParamsModel
	): Observable<QueryResultsModel> {
		const url = FLUX_URL.ALL_NEWS_URL;
		const index = `index=${queryParams.pageNumber - 1}`;

		const response = this.http.get(url + index);
		return response.pipe(
			map((res: any) => {
				if (!res) {
					return new QueryResultsModel();
				}
				const items = res.data.map((i: any) => i);
				return new QueryResultsModel({
					items: items,
					totalCount: res.total_count
				});
			})
		);
	}
}
