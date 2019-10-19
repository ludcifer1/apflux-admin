import { QueryParamsModel } from '@logixtek/data-table';
import { DeviceService } from '@app/core/services/device.service';
import { of, Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { DeviceState } from '../stores/device-store/device.state';
import { tap, catchError } from 'rxjs/operators';
import {
	LoadDeviceDetailSuccess,
	LoadDeviceDetailFail
} from '../stores/device-store/device.action';
import { DeviceModel } from '@app/shared/models/device.model';

export class DeviceStoreService {
	@Select(DeviceState.deviceDetail) deviceDetail$: Observable<any>;

	constructor(private deviceService: DeviceService, private store: Store) {}

	getDeviceDetail(): Observable<any> {
		return this.deviceDetail$;
	}

	find(queryParams: QueryParamsModel) {
		return this.deviceService.getAllDevice(queryParams);
	}

	loadDevicebyDeviceCode(code: string | number) {
		return this.deviceService.getDeviceInfobyCode(code).pipe(
			tap((res: any) => {
				if (res) {
					this.store.dispatch(
						new LoadDeviceDetailSuccess(new DeviceModel(res))
					);
				}
			}),
			catchError(error => {
				return this.store.dispatch(new LoadDeviceDetailFail(error));
			})
		);
	}
}
