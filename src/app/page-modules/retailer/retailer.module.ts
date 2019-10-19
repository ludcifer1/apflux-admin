import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
	MAT_DIALOG_DEFAULT_OPTIONS,
	MatBottomSheetModule,
	MatDialogModule,
	MatFormFieldModule,
	MatInputModule,
	MatProgressSpinnerModule,
	MatSelectModule,
	MatSnackBarModule,
	MatTableModule
} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';

import { BsDatepickerModule } from 'ngx-bootstrap';
import { CommonModule } from '@angular/common';
import { LogixtekCommonModule } from '@logixtek/common';
import { LogixtekDataTableModule } from '@logixtek/data-table';
import { NgModule } from '@angular/core';
import { RContractsComponent } from './components/retailer-info-detail/r-contracts/r-contracts.component';
import { RDevicesComponent } from './components/retailer-info-detail/r-devices/r-devices.component';
import { RGeneralInfoComponent } from './components/retailer-info-detail/r-general-info/r-general-info.component';
import { RInventoryComponent } from './components/retailer-info-detail/r-inventory/r-inventory.component';
import { ROrdersComponent } from './components/retailer-info-detail/r-orders/r-orders.component';
import { RSelloutComponent } from './components/retailer-info-detail/r-sellout/r-sellout.component';
import { RetailerComponent } from './container/retailer.component';
import { RetailerContractComponent } from './components/retailer-contract/retailer-contract.component';
import { RetailerDeviceComponent } from './components/retailer-device/retailer-device.component';
import { RetailerInfoComponent } from './components/retailer-info/retailer-info.component';
import { RetailerInfoDetailComponent } from './components/retailer-info-detail/retailer-info-detail.component';
import { RetailerOrderComponent } from './components/retailer-order/retailer-order.component';
import { RetailerRoutingModule } from './retailer-routing.module';
import { RetailerStorageComponent } from './components/retailer-storage/retailer-storage.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NgxSpinnerModule } from 'ngx-spinner';
// tslint:disable-next-line:max-line-length
import { RContractHistoryComponent } from './components/retailer-info-detail/r-contracts/r-contract-history/r-contract-history.component';
// tslint:disable-next-line:max-line-length
import { RContractPaymentComponent } from './components/retailer-info-detail/r-contracts/r-contract-payment/r-contract-payment.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';


@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		//
		NgxSpinnerModule,
		SweetAlert2Module,
		//
		RetailerRoutingModule,
		// SYS
		LogixtekDataTableModule,
		LogixtekCommonModule,
		BsDatepickerModule.forRoot(),
		CollapseModule.forRoot()
	],
	exports: [],
	declarations: [
		RetailerComponent,
		RetailerInfoComponent,
		RetailerDeviceComponent,
		RetailerOrderComponent,
		RetailerStorageComponent,
		RetailerContractComponent,
		RetailerInfoDetailComponent,
		RGeneralInfoComponent,
		RDevicesComponent,
		ROrdersComponent,
		RInventoryComponent,
		RContractsComponent,
		RContractHistoryComponent,
		RContractPaymentComponent,
		RSelloutComponent
	],
	providers: [
	],
	entryComponents: [RetailerInfoDetailComponent]
})
export class RetailerModule {}
