import { ManufacturerModel } from '@app/shared/models/manufacturer.model';
import { State, Selector, Action, StateContext } from '@ngxs/store';
import {
	LoadDistributorDetail,
	LoadDistributorDetailSuccess,
	LoadDistributorB2CDetail,
	LoadDistributorDetailFail,
	LoadDistributorB2CDetailFail,
	LoadDistributorB2CDetailSuccess
} from './distributor.action';
import { DistributorModel } from '@app/shared/models/distributor.model';

export const getDtInitState = (): DistributorStateModel => ({
	detail: null,
	error: null,
	loading: false,
	distributorB2CDetail: null
});

export interface DistributorStateModel {
	error: any;
	loading: boolean;
	detail: DistributorModel;
	distributorB2CDetail: any;
}

@State<DistributorStateModel>({
	name: 'DistributorState',
	defaults: getDtInitState()
})
export class DistributorState {
	@Selector()
	static distributorDetail(state: DistributorStateModel) {
		return state.detail;
	}
	@Selector()
	static distributorB2CDetail(state: DistributorStateModel) {
		return state.distributorB2CDetail;
	}
	constructor() {}

	@Action(LoadDistributorDetail)
	loadDistributorDetail({ patchState }: StateContext<DistributorStateModel>) {
		patchState({ loading: true });
	}

	@Action(LoadDistributorDetailSuccess)
	loadDistributorDetailSuccess(
		{ patchState }: StateContext<DistributorStateModel>,
		{ payload }: LoadDistributorDetailSuccess
	) {
		patchState({
			loading: false,
			detail: payload
		});
	}
	@Action(LoadDistributorDetailFail)
	LoadDistributorDetailFail(
		{ patchState }: StateContext<DistributorStateModel>,
		{ error }: LoadDistributorDetailFail
	) {
		patchState({
			loading: false,
			error: error
		});
	}

	@Action(LoadDistributorB2CDetail)
	loadDistributorB2CDetail({
		patchState
	}: StateContext<DistributorStateModel>) {
		patchState({
			loading: true
		});
	}
	@Action(LoadDistributorB2CDetailSuccess)
	loadDistributorB2CDetailSuccess(
		{ patchState }: StateContext<DistributorStateModel>,
		{ payload }: LoadDistributorB2CDetailSuccess
	) {
		patchState({
			loading: false,
			distributorB2CDetail: payload
		});
	}

	@Action(LoadDistributorB2CDetailFail)
	loadDistributorB2CDetailFail(
		{ patchState }: StateContext<DistributorStateModel>,
		{ error }: LoadDistributorB2CDetailFail
	) {
		patchState({
			loading: true,
			error: error
		});
	}
}
