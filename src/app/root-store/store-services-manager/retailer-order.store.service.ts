import {
	IDataService,
	QueryParamsModel,
	QueryResultsModel
} from '@logixtek/data-table';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { RetailerOrderState } from '../stores/retailer-store/retailer-order.state';
import { RetailerService } from '@app/core/services/retailer.service';
import {
	LoadOrders,
	LoadOrdersSuccess,
	LoadOrdersFail
} from '../stores/retailer-store/retailer.action';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { RetailerInfoState } from '../stores/retailer-store/retailer-info.state';
import { RetailerOrder } from '@app/shared/models/retailer.model';

export class RetailerOrderStoreService implements IDataService {
	@Select(RetailerOrderState.retailerOrderState)
	retailerOrder$: Observable<any>;
	@Select(RetailerInfoState.retailerInfoDetail)
	retailerInfoDetail$: Observable<any>;

	constructor(private retailerService: RetailerService, private store: Store) {}
	find(queryParams: QueryParamsModel): Observable<QueryResultsModel> {
		const obs = new Observable<QueryResultsModel>(observer => {
			return this.retailerInfoDetail$
				.pipe(
					mergeMap(res =>
						this.retailerService.getRetailerOrdersbyCode(
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
								items: listResult,
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
