import { AuthenticationService } from '@app/core/auth/authentication.service';
import { Store, Select } from '@ngxs/store';

import { Observable } from 'rxjs';
import { UserState } from '../stores/user-store/user.state';
import { SetUser, ClearUser } from '../stores/user-store/user.action';

export class UserStoreService {
	@Select(UserState.userInfo) userInfo$: Observable<any>;

	constructor(
		private authService: AuthenticationService,
		private store: Store
	) {}

	setUsertoStore() {
		this.store.dispatch(new SetUser(this.authService.getUser()));
	}
	removeUserfromStore() {
		this.store.dispatch(new ClearUser());
		this.authService.logout();
	}

	getUserFromStore() {
		if (!this.userInfo$) {
			return;
		}
		return this.userInfo$;
	}
}
