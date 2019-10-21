import {
	IDataService,
	QueryParamsModel,
	QueryResultsModel
} from '@logixtek/data-table';
import { Observable, forkJoin } from 'rxjs';
import { RetailerInfoState } from '../stores/retailer-store/retailer-info.state';
import { Select, Store } from '@ngxs/store';
import { mergeMap, map } from 'rxjs/operators';
import { StudentService } from '@app/core/services/student.service';

export class RetailerSellOutStoreService implements IDataService {
					@Select(RetailerInfoState.retailerInfoDetail)
					retailerInfoDetail$: Observable<any>;

					constructor(
						private retailerService: StudentService,
						private store: Store
					) {}

					find(queryParams: QueryParamsModel): Observable<QueryResultsModel> {
						const obs = new Observable<QueryResultsModel>(observer => {
							return this.retailerInfoDetail$
								.pipe(
									mergeMap(res =>
										this.retailerService.getRetailerTransactionsbyCode(
											res.retailerCode,
											queryParams
										)
									),
									map((res: any) => {
										if (!res) {
											observer.next(new QueryResultsModel());
											observer.complete();
										}
										const listResult = res;
										if (!listResult) {
											observer.next(new QueryResultsModel());
											observer.complete();
										}
										observer.next(
											new QueryResultsModel({
												items: listResult.items,
												totalCount: listResult.totalCount
											})
										);
										observer.complete();
									})
								)
								.subscribe();
						});
						return obs;
					}
				}
