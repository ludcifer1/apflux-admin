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

export class RetailerSellOutStoreService {
	@Select(RetailerInfoState.retailerInfoDetail)
	retailerInfoDetail$: Observable<any>;

	constructor(private retailerService: StudentService, private store: Store) {}
}
