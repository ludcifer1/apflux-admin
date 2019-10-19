import { State, Selector, Action, StateContext } from '@ngxs/store';
import {
	LoadOrders,
	LoadOrdersSuccess,
	LoadOrdersFail
} from './retailer.action';

export interface RetailerOrderStateModel {
	retailerOrderList: any[];
	loading: boolean;
	error: any;
	totalOrders: number;
	latestOrder: string;
}
export const getInitOrderState = (): any => ({
	retailerOrderList: [],
	totalOrders: 0,
	latestOrder: null,
	loading: false,
	error: null
});

@State<RetailerOrderStateModel>({
	name: 'retailerOrder',
	defaults: getInitOrderState()
})
export class RetailerOrderState {
	@Selector()
	static retailerOrderState(state: RetailerOrderStateModel) {
		return state;
	}

	@Action(LoadOrders)
	LoadOrders({ patchState }: StateContext<RetailerOrderStateModel>) {
		patchState({ loading: true });
	}



	@Action(LoadOrdersFail)
	LoadOrdersFail(
		{ patchState }: StateContext<RetailerOrderStateModel>,
		{ error }: LoadOrdersFail
	) {
		patchState({
			error: error,
			loading: false,
			retailerOrderList: null,
			totalOrders: null,
			latestOrder: null
		});
	}

	@Action(LoadOrdersSuccess)
	loadOrdersSuccess(
		{ patchState }: StateContext<RetailerOrderStateModel>,
		{ payload }: LoadOrdersSuccess
	) {
		patchState({
			loading: false,
			retailerOrderList: payload,
		});
	}
}
