import { State, Selector, Action, StateContext } from '@ngxs/store';
import {
	LoadContract,
	LoadContractSuccess,
	LoadContractFail
} from './retailer.action';

export interface RetailerContractStateModel {
	retailerContractList: any[];
	loaded: boolean;
	loading: boolean;
}
export const getInitContractState = (): any => ({
	retailerContractList: [],
	loaded: false,
	loading: false
});

@State<RetailerContractStateModel>({
	name: 'RetailerContract',
	defaults: getInitContractState()
})
export class RetailerContractState {
	@Selector()
	static retailerContractList(state: RetailerContractStateModel) {
		return state.retailerContractList;
	}
	@Selector()
	static loaded(state: RetailerContractStateModel) {
		return state.loaded;
	}

	constructor() {}

	@Action(LoadContract)
	loadContract(
		{ patchState, dispatch }: StateContext<RetailerContractStateModel>,
		{ payload }: LoadContract
	) {
		patchState({ loading: true });
		dispatch(new LoadContractSuccess(payload));
	}

	@Action(LoadContractSuccess)
	loadContractSuccess(
		{ patchState }: StateContext<RetailerContractStateModel>,
		{ payload }: LoadContractSuccess
	) {
		patchState({
			retailerContractList: payload ? payload : [],
			loaded: true,
			loading: false
		});
	}
	@Action(LoadContractFail)
	loadContractFail(
		{ patchState }: StateContext<RetailerContractStateModel>,
		{ payload }: LoadContractFail
	) {
		patchState({ loaded: false, loading: false });
	}
}
