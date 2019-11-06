import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DistributorComponent } from './container/distributor.component';
import { LogixtekDataTableModule } from '@logixtek/data-table';
// tslint:disable-next-line:max-line-length
import { NgxSpinnerModule } from 'ngx-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ClassRoutingModule } from './class-routing.module';
import { ClassListComponent } from './components/class-list/class-list.component';
import { ClassDetailComponent } from './components/class-detail/class-detail.component';
import { GeneralInfoComponent } from './components/class-detail/general-info/general-info.component';

@NgModule({
	declarations: [
		DistributorComponent,
		ClassListComponent,
		ClassDetailComponent,
		GeneralInfoComponent
	],
	imports: [
		CommonModule,
		ClassRoutingModule,
		LogixtekDataTableModule,
		CommonModule,
		ReactiveFormsModule,
		SweetAlert2Module,
		NgxSpinnerModule
	],
	entryComponents: [ClassDetailComponent]
})
export class ClassModule {}
