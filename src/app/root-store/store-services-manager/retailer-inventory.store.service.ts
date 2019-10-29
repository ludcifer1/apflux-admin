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

export class RetailerInventoryStoreService   {
					@Select(RetailerInfoState.retailerInfoDetail)
					retailerInfoDetail$: Observable<any>;
					@Select(RetailerInventoryState.invInfo)
					inventoryState$: Observable<any>;

					constructor(
						private retailerService: StudentService,
						private store: Store
					) {}


				}
