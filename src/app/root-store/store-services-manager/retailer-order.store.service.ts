import {
	IDataService,
	QueryParamsModel,
	QueryResultsModel
} from '@logixtek/data-table';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { RetailerOrderState } from '../stores/retailer-store/retailer-order.state';
import { StudentService } from '@app/core/services/student.service';
import {
	LoadOrders,
	LoadOrdersSuccess,
	LoadOrdersFail
} from '../stores/retailer-store/retailer.action';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { RetailerInfoState } from '../stores/retailer-store/retailer-info.state';
import { RetailerOrder } from '@app/shared/models/retailer.model';

export class RetailerOrderStoreService  {
					@Select(RetailerOrderState.retailerOrderState)
					retailerOrder$: Observable<any>;
					@Select(RetailerInfoState.retailerInfoDetail)
					retailerInfoDetail$: Observable<any>;

					constructor(
						private retailerService: StudentService,
						private store: Store
					) {}

				}
