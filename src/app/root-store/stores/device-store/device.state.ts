import { State, Selector, Action, StateContext } from '@ngxs/store';
import { LoadDeviceDetail, LoadDeviceDetailSuccess, LoadDeviceDetailFail } from './device.action';

export const getDeviceInitState = (): DeviceStateModel => ({
	detail: null,
	error: null,
	loading: false
});

export interface DeviceStateModel {
	error: any;
	loading: boolean;
	detail: any;
}

@State<DeviceStateModel>({
	name: 'DeviceState',
	defaults: getDeviceInitState()
})
export class DeviceState {
	@Selector()
	static deviceDetail(state: DeviceStateModel) {
		return state.detail;
	}
	@Selector()
	static deviceError(state: DeviceStateModel) {
		return state.error;
	}
	@Selector()
	static deviceLoading(state: DeviceStateModel) {
		return state.loading;
	}

	@Action(LoadDeviceDetail)
	loadDistributorDetail({ patchState }: StateContext<DeviceStateModel>) {
		patchState({ loading: true });
	}

	@Action(LoadDeviceDetailSuccess)
	loadDistributorDetailSuccess(
		{ patchState }: StateContext<DeviceStateModel>,
		{ payload }: LoadDeviceDetailSuccess
	) {
		patchState({
			loading: false,
			detail: payload
		});
	}
	@Action(LoadDeviceDetailFail)
	LoadDistributorDetailFail(
		{ patchState }: StateContext<DeviceStateModel>,
		{ error }: LoadDeviceDetailFail
	) {
		patchState({
			loading: false,
			error: error
		});
	}
}
