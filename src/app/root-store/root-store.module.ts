import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { UserStoreService } from './store-services-manager/user.store.service';
import { RetailerInfoStoreService } from './store-services-manager/retailer-info.store.service';
import { UserStoreModule } from './stores/user-store';
import { RetailerStoreModule } from './stores/retailer-store';
import { RetailerDeviceStoreService } from './store-services-manager/retailer-device.store.service';
import { RetailerInventoryStoreService } from './store-services-manager/retailer-inventory.store.service';
import { RetailerOrderStoreService } from './store-services-manager/retailer-order.store.service';
import { ImageManagementStoreModule } from './stores/image-management-store/image-management-store.module';
import { TreeManagementStoreService } from './store-services-manager/image-management.store.service';
import { RetailerSellOutStoreService } from './store-services-manager/retailer-sellout.store.service';
import { RetailerContractStoreService } from './store-services-manager/retailer-contract.store.service';
import { UnregAccountStoreService } from './store-services-manager/unreg-account.store.service';
import { DistributorStoreService } from './store-services-manager/distributor.store.service';
import { ManufacturerStoreService } from './store-services-manager/manufacturer.store.service';
import { ManufacturerStoreModule } from './stores/manufacturer-store/manufacturer.store.module';
import { DistributorStoreModule } from './stores/distributor-store/distributor-store.module';
import { ImplementerStoreService } from './store-services-manager/implementer.store.service';
import { OrderStoreService } from './store-services-manager/order.store.service';
import { OrderStoreModule } from './stores/order-store/order-store.module';
import { DeviceStoreService } from './store-services-manager/device.store.service';
import { DeviceStoreModule } from './stores/device-store/device-store.module';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		UserStoreModule,
		RetailerStoreModule,
		ImageManagementStoreModule,
		ManufacturerStoreModule,
		DistributorStoreModule,
		OrderStoreModule,
		DeviceStoreModule,
		//
		// NGXS
		NgxsModule.forRoot(),
		NgxsReduxDevtoolsPluginModule.forRoot()
		// NgxsLoggerPluginModule.forRoot()
	],
	exports: [
		RetailerStoreModule,
		UserStoreModule,
		ManufacturerStoreModule,
	],
	providers: [
		UserStoreService,
		RetailerInfoStoreService,
		RetailerDeviceStoreService,
		RetailerContractStoreService,
		RetailerInventoryStoreService,
		RetailerOrderStoreService,
		RetailerSellOutStoreService,
		TreeManagementStoreService,
		UnregAccountStoreService,
		DistributorStoreService,
		ManufacturerStoreService,
		ImplementerStoreService,
		OrderStoreService,
		DeviceStoreService
	]
})
export class RootStoreModule {}
