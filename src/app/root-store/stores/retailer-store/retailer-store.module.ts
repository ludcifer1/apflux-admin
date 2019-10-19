import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { RetailerInfoState } from './retailer-info.state';
import { RetailerDeviceState } from './retailer-device.state';
import { RetailerInventoryState } from './retailer-inventory.state';
import { RetailerOrderState } from './retailer-order.state';
import { RetailerContractState } from './retailer-contract.state';

@NgModule({
	declarations: [],
	imports: [
		NgxsModule.forFeature([
			RetailerInfoState,
			RetailerDeviceState,
			RetailerInventoryState,
			RetailerOrderState,
			RetailerContractState
		]),
		CommonModule
	]
})
export class RetailerStoreModule {}
