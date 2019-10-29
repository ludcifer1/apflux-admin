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
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';
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
	gradesArrForm: FormArray;
	gradesForm: FormGroup;
	// ================================================
	// =             CONSTRUCTOR SECTION              =
	// ================================================

	constructor(
		private retailerORDStoreService: RetailerOrderStoreService,
		private fb: FormBuilder
	) {}

	ngOnInit() {}
	// ================================================
	// =                   PRIVATE                    =
	// ================================================
	private createGradeForm() {
		return this.fb.group(FORM.GRADES_FORM);
	}
	private getCurrentDate(): Date {
		return _moment().toDate();
	}
	private getStartDate(): Date {
		const res = _moment()
			.subtract(7, 'days')
			.toDate();
		return res;
	}
}
