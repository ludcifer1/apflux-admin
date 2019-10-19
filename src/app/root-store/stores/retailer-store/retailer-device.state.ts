import { State, Selector, Action, StateContext } from '@ngxs/store';
import {
	LoadDevice,
	LoadDeviceSuccess,
	LoadDeviceFail
} from './retailer.action';

export interface RetailerDeviceStateModel {
	retailerDeviceList: any[];
	loaded: boolean;
	loading: boolean;
}
export const getInitDeviceState = (): any => ({
	retailerDeviceList: [],
	loaded: false,
	loading: false
});

@State<RetailerDeviceStateModel>({
	name: 'RetailerDevice',
	defaults: getInitDeviceState()
})
export class RetailerDeviceState {
	@Selector()
	static retailerDeviceList(state: RetailerDeviceStateModel) {
		return state.retailerDeviceList;
	}
	@Selector()
	static loaded(state: RetailerDeviceStateModel) {
		return state.loaded;
	}

	constructor() {}

	@Action(LoadDevice)
	loadDevice(
		{ patchState, dispatch }: StateContext<RetailerDeviceStateModel>,
		{ payload }: LoadDevice
	) {
		patchState({ loading: true });
		dispatch(new LoadDeviceSuccess(payload));
	}

	@Action(LoadDeviceSuccess)
	loadDeviceSuccess(
		{ patchState }: StateContext<RetailerDeviceStateModel>,
		{ payload }: LoadDeviceSuccess
	) {
		patchState({
			retailerDeviceList: payload ? payload : [],
			loaded: true,
			loading: false
		});
	}
	@Action(LoadDeviceFail)
	loadDeviceFail(
		{ patchState }: StateContext<RetailerDeviceStateModel>,
		{ payload }: LoadDeviceFail
	) {
		patchState({ loaded: false, loading: false });
	}
}
