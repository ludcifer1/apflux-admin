import { Observable, of } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { LoadDevice } from '../stores/retailer-store/retailer.action';
import { switchMap, take, tap } from 'rxjs/operators';
import { QueryParamsModel, QueryResultsModel } from '@logixtek/data-table';
import { StudentService } from '@app/core/services/student.service';
import { RetailerDeviceState } from '../stores/retailer-store/retailer-device.state';

export class RetailerDeviceStoreService {
					@Select(RetailerDeviceState.retailerDeviceList)
					retailerDeviceList$: Observable<any>;
					@Select(RetailerDeviceState.loaded)
					loaded$: Observable<any>;
					constructor(
						private store: Store,
						private studentService: StudentService
					) {}

				}
