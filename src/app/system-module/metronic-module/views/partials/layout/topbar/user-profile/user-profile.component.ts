// Angular
import { Component, Input, OnInit } from '@angular/core';
// RxJS
import { Observable } from 'rxjs';
import { AuthenticationService } from '@app/core/auth/authentication.service';
import { UserStoreService } from '@app/root-store/store-services-manager/user.store.service';

@Component({
	selector: 'kt-user-profile',
	templateUrl: './user-profile.component.html'
})
export class UserProfileComponent implements OnInit {
	user: any;
	@Input() avatar = true;
	@Input() greeting = true;
	@Input() badge: boolean;
	@Input() icon: boolean;

	/**
	 * Component constructor
	 *
	 * @param store: Store<AppState>
	 */
	constructor(private userStoreService: UserStoreService) {
		this.user = {
			fullname: 'Polytechnic Admin ',
			pic: '../../../../../assets/media/users/default.jpg'
		};
	}

	/**
	 * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
	 */

	/**
	 * On init
	 */
	ngOnInit(): void {}

	/**
	 * Log out
	 */
	logout() {
		// TODO: MSAL LOGOUT OR STATE LOGOUT
		this.userStoreService.removeUserfromStore();
	}
}
