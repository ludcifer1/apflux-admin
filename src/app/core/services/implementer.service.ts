import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
	DataTableService,
	QueryParamsModel,
	QueryResultsModel
} from '@logixtek/data-table';
import { Observable, of } from 'rxjs';

@Injectable()
export class ImplementerService extends DataTableService {
	constructor(private http: HttpClient) {
		super();
	}
	getAllImplementers(
		queryParams: QueryParamsModel
	): Observable<QueryResultsModel> {
		return of(new QueryResultsModel());
		const url = null;
		const params = this.getSearchParams(queryParams);
		const response = this.http.get(url, { params });
		return this.getResult(response).pipe();
	}
}
