import { DistributorService } from '@app/core/services/distributor.service';
import { QueryParamsModel, QueryResultsModel } from '@logixtek/data-table';
import { AccountService } from '@app/core/services/account.service';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { DistributorState } from '../stores/distributor-store/distributor.state';
import {
	LoadDistributorDetail,
	LoadDistributorB2CDetail,
	LoadDistributorDetailSuccess,
	LoadDistributorDetailFail,
	LoadDistributorB2CDetailSuccess,
	LoadDistributorB2CDetailFail
} from '../stores/distributor-store/distributor.action';
import { tap, map, catchError } from 'rxjs/operators';
import { DistributorModel } from '@app/shared/models/distributor.model';

export class DistributorStoreService {
	@Select(DistributorState.distributorDetail)
	distributorDetail$: Observable<any>;
	@Select(DistributorState.distributorB2CDetail)
	distributorB2CDetail$: Observable<any>;

	constructor(
		private distributorService: DistributorService,
		private accountService: AccountService,
		private store: Store
	) {}

	find(queryParams: QueryParamsModel) {
		return this.distributorService.getAllDistributors(queryParams);
	}
	getDistributorDetail(): Observable<any> {
		return this.distributorDetail$;
	}
	getDistributorB2CDetail(): Observable<any> {
		return this.distributorB2CDetail$;
	}

	loadDistributorDetailInfobyCode(code: any) {
		return this.distributorService.getDistributorByCode(code).pipe(
			tap((res: any) => {
				if (res) {
					this.store.dispatch(
						new LoadDistributorDetailSuccess(new DistributorModel(res))
					);
				}
			}),
			catchError(error => {
				return this.store.dispatch(new LoadDistributorDetailFail(error));
			})
		);
	}

	loadDistributorB2CInfo(userName: string) {
		this.store.dispatch(new LoadDistributorB2CDetail());
		return this.accountService.loadAccountB2CByCode(userName).pipe(
			tap((res: any) => {
				if (res) {
					this.store.dispatch(new LoadDistributorB2CDetailSuccess(res.result));
				}
			}),
			catchError(error => {
				return this.store.dispatch(new LoadDistributorB2CDetailFail(error));
			})
		);
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
