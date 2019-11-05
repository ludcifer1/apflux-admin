import { QueryParamsModel } from '@logixtek/data-table';
import { ManufacturerService } from '@app/core/services/manufacturer.service';
import { Select, Store } from '@ngxs/store';
import { ManufacturerState } from '../stores/manufacturer-store/manufacturer.state';
import { Observable } from 'rxjs';
import { AccountService } from '@app/core/services/account.service';
import {
	LoadManufacturerB2CDetail,
	LoadManufacturerDetail,
	LoadManufacturerDetailSuccess,
	LoadManufacturerDetailFail,
	LoadManufacturerB2CDetailSuccess,
	LoadManufacturerB2CDetailFail
} from '../stores/manufacturer-store/manufacturer.action';
import { tap, catchError } from 'rxjs/operators';
import { ManufacturerModel } from '@app/shared/models/manufacturer.model';

export class ManufacturerStoreService {
	@Select(ManufacturerState.manufacturerDetail)
	manufacturerDetail$: Observable<any>;
	@Select(ManufacturerState.manufacturerB2CDetail)
	manufacturerB2CDetail$: Observable<any>;

	constructor(
		private manuService: ManufacturerService,
		private accountService: AccountService,
		private store: Store
	) {}

	find(queryParams: QueryParamsModel) {
		return this.manuService.getAllSubject(queryParams);
	}
	getManufacturerDetail(): Observable<any> {
		return this.manufacturerDetail$;
	}
	getManufacturerB2CDetail(): Observable<any> {
		return this.manufacturerB2CDetail$;
	}

	loadManufacturerDetailInfobyCode(code: any) {
		this.store.dispatch(new LoadManufacturerDetail());
		return this.manuService.getManufacturerByCode(code).pipe(
			tap((res: any) => {
				if (res) {
					this.store.dispatch(
						new LoadManufacturerDetailSuccess(new ManufacturerModel(res))
					);
				}
			}),
			catchError(error => {
				return this.store.dispatch(new LoadManufacturerDetailFail(error));
			})
		);
	}

	loadManufacturerB2CInfo(userName: string) {
		this.store.dispatch(new LoadManufacturerB2CDetail());
		return this.accountService.loadAccountB2CByCode(userName).pipe(
			tap((res: any) => {
				if (res) {
					this.store.dispatch(new LoadManufacturerB2CDetailSuccess(res.result));
				}
			}),
			catchError(error => {
				return this.store.dispatch(new LoadManufacturerB2CDetailFail(error));
			})
		);
	}

	loadManufacturerforFilter() {
		return this.manuService.getManufacturerforFilter();
	}

	changeManufacturerB2CStatus(userName: string, status: boolean) {
		return this.accountService.changeAccountB2CStatusbyUserName(
			userName,
			status
		);
	}
	resetAccountPassword(userName: string, password: string) {
		return this.accountService.resetAccountPassword(userName, password);
	}
}
