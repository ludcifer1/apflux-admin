import { State, Selector, Action, StateContext } from '@ngxs/store';
import {
	LoadRetailer,
	LoadRetailerSuccess,
	LoadRetailerFail,
	LoadRetailerInfoDetail,
	LoadRetailerInfoDetailSuccess,
	LoadRetailerInfoDetailFail,
	LoadRetailerB2CDetail,
	ResetSelectedRetailer,
	LoadRetailerB2CDetailSuccess,
	LoadRetailerB2CDetailFail
} from './retailer.action';

export interface RetailerInfoStateModel {
	retailerInfoList: any[];
	loading: boolean;
	error: any;
	retailerInfoDetail: any;
	retailerB2CDetail: any;
	selectedRetailer: number;
}
export const getInitInfoState = (): any => ({
	retailerInfoList: [],
	loading: false,
	error: null,
	selectedRetailer: null,
	retailerInfoDetail: null,
	retailerB2CDetail: null
});

@State<RetailerInfoStateModel>({
	name: 'retailerInfo',
	defaults: getInitInfoState()
})
export class RetailerInfoState {
	@Selector()
	static retailerInfoList(state: RetailerInfoStateModel) {
		return state.retailerInfoList;
	}
	@Selector()
	static retailerInfoDetail(state: RetailerInfoStateModel) {
		return state.retailerInfoDetail;
	}

	@Selector()
	static loading(state: RetailerInfoStateModel) {
		return state.loading;
	}
	@Selector()
	static B2CDetail(state: RetailerInfoStateModel) {
		return state.retailerB2CDetail;
	}

	constructor() {}

	@Action(LoadRetailer)
	loadRetailer({ patchState }: StateContext<RetailerInfoStateModel>) {
		patchState({ loading: true });
	}

	@Action(LoadRetailerSuccess)
	loadRetailerSuccess(
		{ patchState }: StateContext<RetailerInfoStateModel>,
		{ payload }: LoadRetailerSuccess
	) {
		patchState({
			retailerInfoList: payload ? payload : [],
			loading: false
		});
	}
	@Action(LoadRetailerFail)
	loadRetailerFail(
		{ patchState }: StateContext<RetailerInfoStateModel>,
		{ payload }: LoadRetailerFail
	) {
		patchState({ loading: false });
	}
	// ================================================
	// =                                              =
	// ================================================
	@Action(LoadRetailerInfoDetail)
	LoadRetailerInfoDetail({ patchState }: StateContext<RetailerInfoStateModel>) {
		patchState({ loading: true });
	}

	@Action(LoadRetailerInfoDetailSuccess)
	LoadRetailerInfoDetailSuccess(
		{ patchState }: StateContext<RetailerInfoStateModel>,
		{ payload }: LoadRetailerInfoDetailSuccess
	) {
		patchState({
			retailerInfoDetail: payload,
			loading: false
		});
	}

	@Action(LoadRetailerInfoDetailFail)
	LoadRetailerInfoDetailFail(
		{ patchState }: StateContext<RetailerInfoStateModel>,
		{ error }: LoadRetailerInfoDetailFail
	) {
		patchState({
			loading: false,
			error: error,
			retailerInfoDetail: null
		});
	}

	@Action(LoadRetailerB2CDetail)
	LoadRetailerB2CDetail({ patchState }: StateContext<RetailerInfoStateModel>) {
		patchState({ loading: true });
	}
	@Action(LoadRetailerB2CDetailSuccess)
	LoadRetailerB2CDetailSuccess(
		{ patchState }: StateContext<RetailerInfoStateModel>,
		{ payload }: LoadRetailerB2CDetailSuccess
	) {
		patchState({
			loading: false,
			retailerB2CDetail: payload
		});
	}
	@Action(LoadRetailerB2CDetailFail)
	LoadRetailerB2CDetailFail(
		{ patchState }: StateContext<RetailerInfoStateModel>,
		{ payload }: LoadRetailerB2CDetailFail
	) {
		patchState({
			loading: false,
			retailerInfoDetail: null,
			error: payload
		});
	}

	@Action(ResetSelectedRetailer)
	resetSelectedRetailer({ patchState }: StateContext<RetailerInfoStateModel>) {
		patchState({
			retailerInfoDetail: null,
			selectedRetailer: null
		});
	}
}
