import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DistributorComponent } from './container/distributor.component';
import { DistributorListComponent } from './components/distributor-list/distributor-list.component';
import { DistributorRoutingModule } from './distributor-routing.module';
import { LogixtekDataTableModule } from '@logixtek/data-table';
// tslint:disable-next-line:max-line-length
import { DistributorProfileDetailComponent } from './components/distributor-profile-detail/distributor-profile-detail.component';
import { GeneralInfoComponent } from './components/distributor-profile-detail/general-info/general-info.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
	declarations: [
		DistributorComponent,
		DistributorListComponent,
		DistributorProfileDetailComponent,
		GeneralInfoComponent
	],
	imports: [
		CommonModule,
		DistributorRoutingModule,
		LogixtekDataTableModule,
		CommonModule,
		ReactiveFormsModule,
		SweetAlert2Module,
		NgxSpinnerModule
	],
	entryComponents: [DistributorProfileDetailComponent]
})
export class DistributorModule {}
