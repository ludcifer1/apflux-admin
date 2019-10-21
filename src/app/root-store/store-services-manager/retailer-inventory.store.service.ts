import { StudentService } from '@app/core/services/student.service';
import {
	QueryResultsModel,
	IDataService,
	QueryParamsModel
} from '@logixtek/data-table';
import { Observable } from 'rxjs/Observable';
import {
	tap,
	switchMap,
	map,
	mergeMap,
	concatMap,
	catchError
} from 'rxjs/operators';
import { Select, Store } from '@ngxs/store';
import { RetailerInfoState } from '../stores/retailer-store/retailer-info.state';
import { of, forkJoin, throwError } from 'rxjs';
import { RetailerInventoryState } from '../stores/retailer-store/retailer-inventory.state';
import {
	LoadInventory,
	ResetState,
	LoadInventorySuccess,
	LoadInventoryFail
} from '../stores/retailer-store/retailer.action';

export class RetailerInventoryStoreService implements IDataService {
					@Select(RetailerInfoState.retailerInfoDetail)
					retailerInfoDetail$: Observable<any>;
					@Select(RetailerInventoryState.invInfo)
					inventoryState$: Observable<any>;

					constructor(
						private retailerService: StudentService,
						private store: Store
					) {}

					find(queryParams: QueryParamsModel): Observable<QueryResultsModel> {
						this.store.dispatch(new ResetState());
						const obs = new Observable<QueryResultsModel>(observer => {
							this.store.dispatch(new LoadInventory());
							return this.retailerInfoDetail$
								.pipe(
									mergeMap(res =>
										forkJoin(
											this.retailerService.getRetailerInventorybyCode(
												res.retailerCode,
												queryParams
											),
											this.retailerService.getRetailerInventorySummarize(
												res.retailerCode
											)
										)
									),
									map((res: any) => {
										if (!res) {
											observer.next(new QueryResultsModel());
											observer.complete();
										}
										this.store.dispatch(new LoadInventorySuccess(res));
										const listResult = res[0].result;
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
									}),
									catchError(error => {
										return this.store.dispatch(new LoadInventoryFail(error));
									})
								)
								.subscribe();
						});
						return obs;
					}

					getInventoryStat() {
						// return this.retailerService
						return this.inventoryState$;
					}

					getRetailerCategory() {
						return this.retailerInfoDetail$.pipe(
							mergeMap(res =>
								this.retailerService.getRetailerCategorybyCode(res.retailerCode)
							)
						);
					}

					getRetailerSubCategory() {
						return this.retailerInfoDetail$.pipe(
							mergeMap(res =>
								this.retailerService.getRetailerSubCategorybyCode(
									res.retailerCode
								)
							)
						);
					}
				}
