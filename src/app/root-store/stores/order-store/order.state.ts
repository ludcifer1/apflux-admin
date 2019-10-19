import { State, Selector, Action, StateContext } from '@ngxs/store';
import {
	LoadOrderDetail,
	LoadOrderDetailSuccess,
	LoadOrderDetailFail
} from './order.action';
import { OrderModel } from '@app/shared/models/order.model';

export const getOrderInitState = (): OrderStateModel => ({
	detail: null,
	error: null,
	loading: false
});

export interface OrderStateModel {
	detail: OrderModel;
	error: any;
	loading: boolean;
}

@State<OrderStateModel>({
	name: 'OrderState',
	defaults: getOrderInitState()
})
export class OrderState {
	@Selector()
	static orderDetail(state: OrderStateModel) {
		return state.detail;
	}
	@Selector()
	static orderError(state: OrderStateModel) {
		return state.error;
	}
	@Selector()
	static orderLoading(state: OrderStateModel) {
		return state.loading;
	}

	constructor() {}

	@Action(LoadOrderDetail)
	loadOrderDetail({ patchState }: StateContext<OrderStateModel>) {
		patchState({ loading: true });
	}
	@Action(LoadOrderDetailSuccess)
	loadOrderDetailSuccess(
		{ patchState }: StateContext<OrderStateModel>,
		{ payload }: LoadOrderDetailSuccess
	) {
		patchState({
			detail: payload,
			loading: false
		});
	}
	@Action(LoadOrderDetailFail)
	LoadOrderDetailFail(
		{ patchState }: StateContext<OrderStateModel>,
		{ error }: LoadOrderDetailFail
	) {
		patchState({
			error: error,
			detail: null,
			loading: false
		});
	}
}
