import { State, Selector, StateContext, Action } from '@ngxs/store';
import {
	LoadInventory,
	LoadInventorySuccess,
	ResetState,
	LoadInventoryFail
} from './retailer.action';

export interface RetailerInventoryStateModel {
	retailerInventoryList: any[];
	error: any;
	loading: boolean;
	totalItems: number;
	totalPurchasingValue: number;
	totalSellingValue: number;
}
export const getInitInventoryState = (): any => ({
	retailerInventoryList: [],
	error: null,
	loading: false,
	totalItems: 0,
	totalPurchasingValue: 0,
	totalSellingValue: 0
});

@State<RetailerInventoryStateModel>({
	name: 'retailerInventory',
	defaults: getInitInventoryState()
})
export class RetailerInventoryState {
	@Selector()
	static invInfo(state: RetailerInventoryStateModel) {
		return {
			totalItems: state.totalItems,
			totalPurchasingValue: state.totalPurchasingValue,
			totalSellingValue: state.totalSellingValue
		};
	}

	constructor() {}

	@Action(LoadInventory)
	LoadInventory({ patchState }: StateContext<RetailerInventoryStateModel>) {
		patchState({ loading: true });
	}

	@Action(LoadInventorySuccess)
	loadInventorySuccess(
		{ patchState }: StateContext<RetailerInventoryStateModel>,
		{ payload }: LoadInventorySuccess
	) {
		const inventoryList = payload[0].result;
		const inventorySummarize = payload[1].result;
		if (inventoryList && inventorySummarize) {
			patchState({
				loading: false,
				retailerInventoryList: inventoryList.items,
				totalItems: inventorySummarize.totalItems,
				totalPurchasingValue: inventorySummarize.totalPurchasingValue,
				totalSellingValue: inventorySummarize.totalSellingValue
			});
		}
	}
	@Action(LoadInventoryFail)
	LoadInventoryFail(
		{ patchState }: StateContext<RetailerInventoryStateModel>,
		{ error }: LoadInventoryFail
	) {
		patchState({
			loading: false,
			error: error
		});
	}

	@Action(ResetState)
	ResetState({ patchState }: StateContext<RetailerInventoryStateModel>) {
		patchState(getInitInventoryState());
	}
}
