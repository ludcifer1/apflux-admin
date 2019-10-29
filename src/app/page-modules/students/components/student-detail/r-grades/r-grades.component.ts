import * as _moment from 'moment';

import { Component, OnInit } from '@angular/core';
import {
	DateColumn,
	DateFilter,
	DropdownFilter,
	IDataTable,
	NumberColumn,
	TextColumn,
	TextFilter
} from '@logixtek/data-table';

import { RetailerOrderStoreService } from '@app/root-store/store-services-manager/retailer-order.store.service';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { FORM } from '@app/shared/constants/form.constant';

@Component({
	selector: 'r-grades',
	templateUrl: './r-grades.component.html',
	styleUrls: ['./r-grades.component.scss']
})
export class RGradesComponent implements OnInit {
	// ================================================
	// =              ATTRIBUTES SECTION              =
	// ================================================
	gradesForm: FormGroup;
	// ================================================
	// =             CONSTRUCTOR SECTION              =
	// ================================================

	constructor(
		private retailerORDStoreService: RetailerOrderStoreService,
		private fb: FormBuilder
	) {}

	get gradesArr() {
		return <FormArray>this.gradesForm.get('gradesArr');
	}

	ngOnInit() {
		this.gradesForm = this.fb.group({});
		this.gradesForm.addControl('gradesArr', new FormArray([]));
		this.gradesForm.setControl('gradesArr', this.fb.array(this.loadSubject()));
		console.log('>>>', this.gradesForm);
	}
	// ================================================
	// =                   PRIVATE                    =
	// ================================================
	private loadSubject() {
		const subject = [
			{ id: 1, name: 'A' },
			{ id: 2, name: 'A' },
			{ id: 3, name: 'A' }
		];
		const temp = [];
		for (let index = 0; index < subject.length; index++) {
			temp.push(this.createGradeForm());
		}
		return temp;
	}

	private createGradeForm() {
		return this.fb.group(FORM.GRADE_FORM);
	}
}
