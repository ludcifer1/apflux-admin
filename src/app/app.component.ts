import { Subscription } from 'rxjs';
// Angular
import {
	ChangeDetectionStrategy,
	Component,
	OnDestroy,
	OnInit
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
// Layout
import {
	LayoutConfigService,
	SplashScreenService
} from './system-module/metronic-module/core/_base/layout';
import { AuthenticationService } from './core/auth/authentication.service';
import { UserStoreService } from './root-store/store-services-manager/user.store.service';
import { Location } from '@angular/common';

@Component({
	// tslint:disable-next-line:component-selector
	selector: 'app',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {
	loader: boolean;
	isIframe;
	private unsubscribe: Subscription[] = [];

	//
	constructor(
		private router: Router,
		private layoutConfigService: LayoutConfigService,
		private splashScreenService: SplashScreenService,
		private authService: AuthenticationService,
		private appStoreService: UserStoreService,
		private location: Location
	) {
		// Store user to state
		this.appStoreService.setUsertoStore();
		this.isIframe = window !== window.parent && !window.opener;
		if (!this.location.path()) {
			this.router.navigate([]);
		}
	}
	ngOnInit() {
		// enable/disable loader
		this.loader = this.layoutConfigService.getConfig('loader.enabled');
		const routerSubscription = this.router.events.subscribe(event => {
			if (event instanceof NavigationEnd) {
				// hide splash screen
				this.splashScreenService.hide();
				// scroll to top on every route change
				window.scrollTo(0, 0);

				// to display back the body content
				setTimeout(() => {
					document.body.classList.add('kt-page--loaded');
				}, 500);
			}
		});
		this.unsubscribe.push(routerSubscription);
	}

	/**
	 * On Destroy
	 */
	ngOnDestroy() {
		this.unsubscribe.forEach(sb => sb.unsubscribe());
	}
}
