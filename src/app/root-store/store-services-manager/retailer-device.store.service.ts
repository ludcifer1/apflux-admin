import { Observable, of } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { LoadDevice } from '../stores/retailer-store/retailer.action';
import { switchMap, take, tap } from 'rxjs/operators';
import { QueryParamsModel, QueryResultsModel } from '@logixtek/data-table';
import { RetailerService } from '@app/core/services/retailer.service';
import { RetailerDeviceState } from '../stores/retailer-store/retailer-device.state';

export class RetailerDeviceStoreService {
	@Select(RetailerDeviceState.retailerDeviceList)
	retailerDeviceList$: Observable<any>;
	@Select(RetailerDeviceState.loaded)
	loaded$: Observable<any>;
	constructor(
		private store: Store,
		private retailerService: RetailerService
	) { }

	getDeviceListFromStore() {
		return this.retailerDeviceList$;
	}

	getRetailerDeviceLoaded() {
		return this.loaded$;
	}

	// DATA TABLE SUPPLIER
	getDevices(retailerId: string): Observable<QueryResultsModel> {
		return this.retailerService.getDevices(retailerId).pipe(
			tap((res: any) => {
				this.loadDeviceList(res);
			})
		);
	}

	private loadDeviceList(data: any[]) {
		this.store.dispatch(new LoadDevice(data));
	}
}
