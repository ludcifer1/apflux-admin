import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogixtekDataTableModule } from '@logixtek/data-table';
// tslint:disable-next-line:max-line-length
// tslint:disable-next-line:max-line-length
// tslint:disable-next-line:max-line-length
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { SubjectsRoutingModule } from './subjects-routing.module';
import { SubjectsComponent } from './container/subjects.component';
import { SubjectListComponent } from './components/subject-list/subject-list.component';
import { SubjectDetailComponent } from './components/subject-detail/subject-detail.component';

@NgModule({
	declarations: [
		SubjectsComponent,
		SubjectListComponent,
		SubjectDetailComponent,
	],
	imports: [
		CommonModule,
		SubjectsRoutingModule,
		LogixtekDataTableModule,
		CommonModule,
		ReactiveFormsModule,
		NgxSpinnerModule,
		SweetAlert2Module
	],
	entryComponents: [SubjectDetailComponent]
})
export class SubjectsModule { }
