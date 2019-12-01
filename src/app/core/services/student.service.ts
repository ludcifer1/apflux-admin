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

const API_STUDENT_PROFILES_URL = API_URL.RETAILER_PROFILES_URL;
const API_STUDENT_PROFILES_DETAIL_URL = FLUX_URL.ALL_STUDENT_DETAIL_URL;

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
		const index = `&index=${queryParams.pageNumber - 1}`;
		const response = this.http.get(url + index);
		return response.pipe(
			map((res: any) => {
				if (!res) {
					return new QueryResultsModel();
				}
				const items = res.data.map((i: any) => this.MapStudent(i));
				return new QueryResultsModel({
					items: items,
					totalCount: res.total_count
				});
			})
		);
	}

	// ================================================
	// =             API SERVICES                     =
	// ================================================

	postStudent(student: Student): Observable<any> {
		const url = API_POST_STUDENT;
		let result: Observable<any>;
		// TODO:
		// const temp = student;
		const formData = new FormData();
		Object.keys(student).forEach(key => formData.append(key, student[key]));

		result = this.http.post(url, formData);
		return result;
	}
	// ================================================
	// =            GET BY CODE                       =
	// ================================================

	getStudentInfobyCode(code: any) {
		console.log(code);
		let result: Observable<QueryResultsModel>;
		const url = API_STUDENT_PROFILES_DETAIL_URL + `&sid=${code}`;
		result = this.http.get<any>(url);
		return result;
	}

	// ================================================
	// =                    PRIVATE                   =
	// ================================================

	private ErrorHandler(err: any) { }

	// ================================================
	// =                    DEVICES                   =

	// ================================================
	// =                    DEVICES                   =
	private MapContract(data: any) {
		return new RetailerContract(data);
	}
	// ================================================
	// =                    DEVICES                   =

	private MapStudent(data: any) {
		return new Student(data);
	}
}
