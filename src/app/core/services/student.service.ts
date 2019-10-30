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
import { API_URL, FLUX_URL } from '@app/shared/constants/api.constant';
import { Student } from '@app/shared/models/student.model';

const API_RETAILER_PROFILES_URL = API_URL.RETAILER_PROFILES_URL;
const API_RETAILER_INVENTORY_URL = API_URL.API_RETAILER_INVENTORY_URL;
const API_RETAILER_SELLOUT_URL = API_URL.API_RETAILER_SELLOUT_URL;
const API_RETAILER_ORDERS_URL = API_URL.API_RETAILER_ORDERS_URL;
const API_RETAILER_DEVICE_URL = '/devices';
const API_RETAILER_CONTRACT_URL = '/contracts';
const API_STUDENT = FLUX_URL.ALL_STUDENT_URL;
const API_POST_STUDENT = FLUX_URL.POST_STUDENT_URL;

@Injectable()
export class StudentService extends DataTableService {
	constructor(private http: HttpClient) {
		super();
	}
	// ================================================
	// =   FIND DATA ===> LOGIX TABLE DATA PROVIDER   =
	// ================================================

	find(queryParams: QueryParamsModel): Observable<QueryResultsModel> {
		const url = API_STUDENT;
		const response = this.http.get(url);
		return response.pipe(
			map((res: any) => {
				if (!res) {
					return new QueryResultsModel();
				}
				const items = res.data.map((i: any) => this.MapStudent(i));
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
	postStudent(student: Student): Observable<any> {
		const url = API_POST_STUDENT;
		let result: Observable<any>;
		const temp = student;
		temp['request'] = 1;
		console.log('>>> temp', temp);

		result = this.http.post(url, temp);
		return result;
	}
	// ================================================
	// =            GET BY CODE                       =
	// ================================================

	getRetailerInfobyCode(code: any) {
		let result: Observable<QueryResultsModel>;
		const url = API_RETAILER_PROFILES_URL + `${code}`;
		result = this.http.get<any>(url);
		return result;
	}

	// ================================================
	// =                    PRIVATE                   =
	// ================================================

	private ErrorHandler(err: any) {}

	// ================================================
	// =                    DEVICES                   =

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
	private MapStudent(data: any) {
		return new Student(data);
	}
}
