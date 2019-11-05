import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogixtekDataTableModule } from '@logixtek/data-table';
// tslint:disable-next-line:max-line-length
import { ManufacturerProfileDetailComponent } from './components/manufacturer-profile-detail/manufacturer-profile-detail.component';
// tslint:disable-next-line:max-line-length
import { ManuDetailGeneralInfoComponent } from './components/manufacturer-profile-detail/general-info/general-info.component';
import { ManuDetailRegionsComponent } from './components/manufacturer-profile-detail/regions/regions.component';
// tslint:disable-next-line:max-line-length
import { ManuDetailPromotionsComponent } from './components/manufacturer-profile-detail/promotions/promotions.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { TimeTableComponent } from './container/time-table.component';
import { TimeTableListComponent } from './components/time-table-list/time-table-list.component';
import { TimeTableRoutingModule } from './time-table-routing.module';

@NgModule({
	declarations: [
		TimeTableComponent,
		TimeTableListComponent,
		ManufacturerProfileDetailComponent,
		ManuDetailGeneralInfoComponent,
		ManuDetailPromotionsComponent,
		ManuDetailRegionsComponent
	],
	imports: [
		CommonModule,
		TimeTableRoutingModule,
		LogixtekDataTableModule,
		CommonModule,
		ReactiveFormsModule,
		NgxSpinnerModule,
		SweetAlert2Module
	],
	entryComponents: [ManufacturerProfileDetailComponent]
})
export class TimeTableModule {}
