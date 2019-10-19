import {
	DataTableService,
	QueryParamsModel,
	QueryResultsModel
} from '@logixtek/data-table';
import {
	RetailerDevice,
	RetailerInfo,
	RetailerInventory,
	RetailerSellOut,
	RetailerContract,
	RetailerOrder
} from '@app/shared/models/retailer.model';
import { map, tap } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '@app/shared/constants/api.constant';

const API_RETAILER_PROFILES_URL = API_URL.RETAILER_PROFILES_URL;
const API_RETAILER_INVENTORY_URL = API_URL.API_RETAILER_INVENTORY_URL;
const API_RETAILER_SELLOUT_URL = API_URL.API_RETAILER_SELLOUT_URL;
const API_RETAILER_ORDERS_URL = API_URL.API_RETAILER_ORDERS_URL;
const API_RETAILER_DEVICE_URL = '/devices';
const API_RETAILER_CONTRACT_URL = '/contracts';

@Injectable()
export class RetailerService extends DataTableService {
	constructor(private http: HttpClient) {
		super();
	}
	// ================================================
	// =   FIND DATA ===> LOGIX TABLE DATA PROVIDER   =
	// ================================================

	find(queryParams: QueryParamsModel): Observable<QueryResultsModel> {
		const url = API_RETAILER_PROFILES_URL;
		const params = this.getSearchParams(queryParams);
		const response = this.http.get(url, { params });
		return this.getResult(response).pipe(
			map((res: any) => {
				if (!res) {
					return new QueryResultsModel();
				}

				const items = res.items.map((i: any) => this.MapRetailer(i));
				return new QueryResultsModel({
					items: items,
					totalCount: res.totalCount
				});
			})
		);
	}

	// ================================================
	// =             API SERVICES                     =
	// ================================================

	getDevices(retailerId: string): Observable<QueryResultsModel> {
		// This code imitates server calls
		const url = API_RETAILER_DEVICE_URL;
		let result: Observable<QueryResultsModel>;
		result = this.http.get(url).pipe(
			map((res: any) => {
				// TODO:
				// if (!res || !res.result) {
				// 	return new QueryResultsModel();
				// }
				if (!res) {
					return new QueryResultsModel();
				}
				const items = res.map((i: any) => {
					return this.MapDevice(i);
				});
				return new QueryResultsModel({ items: items });
			})
		);
		return result;
	}

	getContracts(retailerId: string): Observable<QueryResultsModel> {
		// This code imitates server calls
		const url = API_RETAILER_CONTRACT_URL;
		let result: Observable<QueryResultsModel>;
		result = this.http.get(url).pipe(
			map((res: any) => {
				// TODO:
				// if (!res || !res.result) {
				// 	return new QueryResultsModel();
				// }
				if (!res) {
					return new QueryResultsModel();
				}
				const items = res.map((i: any) => {
					return this.MapContract(i);
				});
				return items;
			})
		);
		return result;
	}
	// ================================================
	// =            GET BY CODE                       =
	// ================================================

	getRetailerInfobyCode(code: string) {
		let result: Observable<QueryResultsModel>;
		const url = API_RETAILER_PROFILES_URL + `${code}`;
		result = this.http.get<any>(url);
		return result;
	}

	getRetailerInventorybyCode(code: string, queryParams: QueryParamsModel) {
		let result: Observable<QueryResultsModel>;
		const url = API_RETAILER_INVENTORY_URL + `${code}`;
		const params = this.getSearchParams(queryParams);

		result = this.http.get<any>(url, { params }).pipe(
			tap((res: any) => {
				if (!res) {
					return new QueryResultsModel();
				}
				return this.MapInventory(res.result);
			})
		);
		return result;
	}

	getRetailerCategorybyCode(code: string) {
		const url = API_RETAILER_INVENTORY_URL + `${code}` + '/Categories';
		const result = this.http.get<any>(url);
		return this.getResult(result);
	}

	getRetailerSubCategorybyCode(code: string) {
		const url = API_RETAILER_INVENTORY_URL + `${code}` + '/SubCategories';
		const result = this.http.get<any>(url);
		return this.getResult(result);
	}

	getRetailerInventorySummarize(code: string) {
		const url = API_RETAILER_INVENTORY_URL + `${code}` + '/Summary';
		const result = this.http.get<any>(url);
		return result;
	}

	getRetailerOrdersbyCode(code: string, queryParams: QueryParamsModel) {
		let result: Observable<QueryResultsModel>;
		const url = API_RETAILER_ORDERS_URL + `?retailerCode=${code}`;
		const params = this.getSearchParams(queryParams);
		result = this.http.get<any>(url, { params }).pipe(
			map((res: any) => {
				if (!res) {
					return new QueryResultsModel();
				}
				const arrOrds = res.result.items;
				return arrOrds.map(order => this.MapOrder(order));
			})
		);
		return result;
	}

	getRetailerTransactionsbyCode(code: string, queryParams: QueryParamsModel) {
		// TODO: NEED FURTHUR iMPRVMNT

		let result: Observable<QueryResultsModel>;
		const url = API_RETAILER_SELLOUT_URL + `?retailerCode=${code}`;
		let params = this.getSearchParams(queryParams);

		params = params.append('fromDate', params.get('dateFrom'));
		params = params.append('toDate', params.get('dateTo'));

		result = this.http.get<any>(url, { params }).pipe(
			map((res: any) => {
				if (!res) {
					return new QueryResultsModel();
				}
				const sellOutArr = res.result.items;
				return new QueryResultsModel({
					items: sellOutArr.map(item => this.MapSellOut(item)),
					totalCount: res.result.totalCount
				});
			})
		);
		return result;
	}

	// ================================================
	// =                    PRIVATE                   =
	// ================================================

	private ErrorHandler(err: any) {}

	// ================================================
	// =                    DEVICES                   =
	private MapDevice(data: any) {
		return new RetailerDevice(data);
	}
	// ================================================
	// =                  INVENTORY                   =
	private MapInventory(data: any) {
		return new RetailerInventory(data);
	}
	private MapSellOut(data: any) {
		return new RetailerSellOut(data);
	}

	// ================================================
	// =                    DEVICES                   =
	private MapContract(data: any) {
		return new RetailerContract(data);
	}
	// ================================================
	// =                    DEVICES                   =
	private MapOrder(data: any) {
		return new RetailerOrder(data);
	}
	private MapRetailer(data: any) {
		return new RetailerInfo(data);
	}
}
