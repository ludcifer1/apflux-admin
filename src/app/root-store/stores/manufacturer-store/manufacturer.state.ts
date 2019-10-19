import { ManufacturerModel } from '@app/shared/models/manufacturer.model';
import { State, Selector, Action, StateContext } from '@ngxs/store';
import {
	LoadManufacturerDetail,
	LoadManufacturerDetailSuccess,
	LoadManufacturerB2CDetail,
	LoadManufacturerB2CDetailSuccess,
	LoadManufacturerB2CDetailFail,
	LoadManufacturerDetailFail
} from './manufacturer.action';

export const getManuInitState = (): ManufacturerStateModel => ({
	detail: null,
	manuB2CDetail: null,
	loading: false,
	error: null
});

export interface ManufacturerStateModel {
	detail: ManufacturerModel;
	loading: boolean;
	error: any;
	manuB2CDetail: any;
}

@State<ManufacturerStateModel>({
	name: 'ManufacturerState',
	defaults: getManuInitState()
})
export class ManufacturerState {
	@Selector()
	static manufacturerDetail(state: ManufacturerStateModel) {
		return state.detail;
	}
	@Selector()
	static manufacturerB2CDetail(state: ManufacturerStateModel) {
		return state.manuB2CDetail;
	}
	constructor() {}

	@Action(LoadManufacturerDetail)
	loadManufacturerDetail({ patchState }: StateContext<ManufacturerStateModel>) {
		patchState({ loading: true });
	}
	@Action(LoadManufacturerDetailSuccess)
	loadManufacturerDetailSuccess(
		{ patchState }: StateContext<ManufacturerStateModel>,
		{ payload }: LoadManufacturerDetailSuccess
	) {
		patchState({
			loading: false,
			detail: payload
		});
	}
	@Action(LoadManufacturerDetailFail)
	LoadManufacturerDetailFail(
		{ patchState }: StateContext<ManufacturerStateModel>,
		{ error }: LoadManufacturerDetailFail
	) {
		patchState({
			loading: false,
			error: error
		});
	}

	@Action(LoadManufacturerB2CDetail)
	loadManufacturerB2CDetail({
		patchState
	}: StateContext<ManufacturerStateModel>) {
		patchState({
			loading: true
		});
	}
	@Action(LoadManufacturerB2CDetailSuccess)
	LoadManufacturerB2CDetailSuccess(
		{ patchState }: StateContext<ManufacturerStateModel>,
		{ payload }: LoadManufacturerB2CDetailSuccess
	) {
		patchState({
			loading: false,
			manuB2CDetail: payload
		});
	}
	@Action(LoadManufacturerB2CDetailFail)
	LoadManufacturerB2CDetailFail(
		{ patchState }: StateContext<ManufacturerStateModel>,
		{ error }: LoadManufacturerB2CDetailFail
	) {
		patchState({
			loading: false,
			error: error
		});
	}
}
