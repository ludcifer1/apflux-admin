import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BsDatepickerModule } from 'ngx-bootstrap';
import { CommonModule } from '@angular/common';
import { LogixtekCommonModule } from '@logixtek/common';
import { LogixtekDataTableModule } from '@logixtek/data-table';
import { NgModule } from '@angular/core';
import { RetailerComponent } from './container/retailer.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentsRoutingModule } from './students-routing.module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NgxSpinnerModule } from 'ngx-spinner';
// tslint:disable-next-line:max-line-length
// tslint:disable-next-line:max-line-length
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';
import { RGeneralInfoComponent } from './components/student-detail/r-general-info/r-general-info.component';
import { RDevicesComponent } from './components/student-detail/r-devices/r-devices.component';
// tslint:disable-next-line:max-line-length
// tslint:disable-next-line:max-line-length
import { StudentNewComponent } from './components/student-new/student-new.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { RGradesComponent } from './components/student-detail/r-grades/r-grades.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		//
		NgxSpinnerModule,
		SweetAlert2Module,
		NgSelectModule,
		//
		StudentsRoutingModule,
		// SYS
		LogixtekDataTableModule,
		LogixtekCommonModule,
		BsDatepickerModule.forRoot(),
		CollapseModule.forRoot()
	],
	exports: [],
	declarations: [
		RetailerComponent,
		StudentListComponent,
		StudentDetailComponent,
		RGeneralInfoComponent,
		RDevicesComponent,

		RGradesComponent,
		StudentNewComponent
	],
	providers: [],
	entryComponents: [StudentDetailComponent, StudentNewComponent]
})
export class StudentsModule {}
