import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { ApiPrefixInterceptor } from './http/api-prefix.interceptor';
import { AuthenticationService } from './auth/authentication.service';
import { CacheInterceptor } from './http/cache.interceptor';
import { CommonModule } from '@angular/common';
import { ErrorHandlerInterceptor } from './http/error-handler.interceptor';
import { HttpCacheService } from './http/http-cache.service';
import { ImageUploadService } from './services/image-upload.service';
import { RetailerService } from './services/retailer.service';
import { RouteReusableStrategy } from './route-reusable-strategy';
import { TranslateModule } from '@ngx-translate/core';
import { TreeNodeService } from './services/tree-node.service';
import { CreateAccountService } from './services/create-account.service';
import { DistributorService } from './services/distributor.service';
import { ManufacturerService } from './services/manufacturer.service';
import { AccountService } from './services/account.service';
import { Implementer } from '@app/shared/models/implementer.model';
import { ImplementerService } from './services/implementer.service';
import { OrderService } from './services/order.service';
import { DeviceService } from './services/device.service';

@NgModule({
	imports: [CommonModule, TranslateModule, RouterModule],
	providers: [
		AuthenticationService,
		HttpCacheService,
		ApiPrefixInterceptor,
		ErrorHandlerInterceptor,
		CacheInterceptor,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: ApiPrefixInterceptor,
			multi: true
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: ErrorHandlerInterceptor,
			multi: true
		},
		{
			provide: HttpClient,
			useClass: HttpClient
		},
		{
			provide: RouteReuseStrategy,
			useClass: RouteReusableStrategy
		},
		RetailerService,
		DistributorService,
		ImageUploadService,
		TreeNodeService,
		CreateAccountService,
		ManufacturerService,
		AccountService,
		ImplementerService,
		OrderService,
		DeviceService
	]
})
export class CoreModule {
	constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
		// Import guard
		if (parentModule) {
			throw new Error(
				`${parentModule} has already been loaded. Import Core module in the AppModule only.`
			);
		}
	}
}
