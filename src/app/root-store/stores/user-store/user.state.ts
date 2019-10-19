import { Action, StateContext, State, Selector } from '@ngxs/store';
import { SetUser, ClearUser } from './user.action';

export const getAppInitState = (): any => ({
	user: null
});
export interface UserStateModel {
	user: User;
}
export interface User {
	displayableId: string;
	idToken: any;
	identityProvider: string;
	name: string;
	userIdentifier: string;
}

@State<UserStateModel>({
	name: 'userState',
	defaults: getAppInitState()
})
export class UserState {
	@Selector()
	static userInfo(state: UserStateModel) {
		return state.user;
	}
	constructor() {}

	@Action(SetUser)
	setUser({ patchState }: StateContext<UserStateModel>, { payload }: SetUser) {
		patchState({ user: payload });
	}

	@Action(ClearUser)
	clearUser({ setState }: StateContext<UserStateModel>) {
		setState(getAppInitState());
	}
}
