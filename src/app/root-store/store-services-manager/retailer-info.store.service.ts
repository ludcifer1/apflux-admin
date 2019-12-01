import { RetailerInfoState } from '../stores/retailer-store/retailer-info.state';
import { Observable, of } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import {
	LoadRetailer,
	LoadRetailerInfoDetail,
	LoadRetailerInfoDetailFail,
	LoadRetailerB2CDetail,
	ResetSelectedRetailer,
	LoadRetailerInfoDetailSuccess,
	LoadRetailerB2CDetailSuccess,
	LoadRetailerB2CDetailFail,
	LoadStudentScores,
	LoadStudentTimetable
} from '../stores/retailer-store/retailer.action';
import { switchMap, take, tap, map, catchError } from 'rxjs/operators';
import { QueryParamsModel, QueryResultsModel } from '@logixtek/data-table';
import { StudentService } from '@app/core/services/student.service';
import { RetailerInfo, Retailer } from '@app/shared/models/retailer.model';
import { AccountService } from '@app/core/services/account.service';
import { Student } from '@app/shared/models/student.model';

export class StudentStoreService {
	// ================================================
	// =              ATTRIBUTES SECTION              =
	// ================================================
	@Select(RetailerInfoState.retailerInfoList)
	retailerInfoList$: Observable<any>;
	@Select(RetailerInfoState.retailerInfoDetail)
	retailerInfoDetail$: Observable<any>;
	@Select(RetailerInfoState.loading) loading$: Observable<any>;
	@Select(RetailerInfoState.B2CDetail) B2CDetail$: Observable<any>;
	@Select(RetailerInfoState.studentScore) score$: Observable<any>;
	@Select(RetailerInfoState.studentTimeTable) timeTable$: Observable<any>;
	// ================================================
	// =             CONSTRUCTOR SECTION              =
	// ================================================
	constructor(
		private store: Store,
		private studentService: StudentService,
		private accountService: AccountService
	) { }
	// ================================================
	// =              BUSINESS METHODS                =
	// ================================================
	getRetailerInfoListFromStore() {
		return this.retailerInfoDetail$;
	}

	getRetailerInfoDetailFromStore() {
		return this.retailerInfoDetail$;
	}

	isDetailLoading() {
		return this.loading$;
	}
	getB2CDetail() {
		return this.B2CDetail$;
	}
	getScore() {
		return this.score$;
	}
	getTimeTable() {
		return this.timeTable$;
	}

	loadRetailerInfoDetailbyCode(code: any) {
		if (typeof code === 'string') {
			this.store.dispatch(new LoadRetailerInfoDetail());
			return this.studentService.getStudentInfobyCode(code).pipe(
				map((res: any) => {
					console.log(res)
					if (res) {
						this.store.dispatch(
							new LoadRetailerInfoDetailSuccess(new Student(res.data.user[0]))
						);
						this.store.dispatch(
							new LoadStudentScores(res.data.grades)
						);
						this.store.dispatch(
							new LoadStudentTimetable(res.data.timetable)
						);
						return new Student(res.data.user[0]);
					}
				}),
				catchError((error: any) => {
					return this.store.dispatch(new LoadRetailerInfoDetailFail(error));
				})
			);
		} else {
			this.store.dispatch(new LoadRetailerInfoDetailSuccess(new Student(code)));
			return of(new Student(code));
		}
	}

	loadRetailerB2CInfo(userName: string) {
		this.store.dispatch(new LoadRetailerB2CDetail());
		return this.accountService.loadAccountB2CByCode(userName).pipe(
			tap((res: any) => {
				if (res) {
					this.store.dispatch(new LoadRetailerB2CDetailSuccess(res.result));
				}
			}),
			catchError(error => {
				return this.store.dispatch(new LoadRetailerB2CDetailFail(error));
			})
		);
	}

	changeRetailerB2CStatus(userName: string, status: boolean) {
		return this.accountService.changeAccountB2CStatusbyUserName(
			userName,
			status
		);
	}
	resetSelectedRetailer() {
		this.store.dispatch(new ResetSelectedRetailer());
	}

	resetAccountPassword(userName: string, password: string) {
		return this.accountService.resetAccountPassword(userName, password);
	}

	// DATA TABLE SUPPLIER
	find(queryParams: QueryParamsModel): Observable<QueryResultsModel> {
		return this.studentService.find(queryParams).pipe(
			tap((res: any) => {
				this.loadRetailerList(res);
			})
		);
	}

	private loadRetailerList(data: any[]) {
		this.store.dispatch(new LoadRetailer(data));
	}
	// ================================================
	// =               RETAILERS                      =
	private MapRetailer(data: any) {
		return new RetailerInfo(data);
	}
}
