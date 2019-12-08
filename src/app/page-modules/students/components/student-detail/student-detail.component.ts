import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RETAILER } from '@app/shared/constants';
import { TabModel } from '@app/shared/models/tab.model';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { TAB } from '@app/shared/constants/tab.constant';

@Component({
	selector: 'student-detail',
	templateUrl: './student-detail.component.html',
	styleUrls: ['./student-detail.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class StudentDetailComponent implements OnInit {
	STUDENT = RETAILER.TEXT;
	STUDENT_TAB_CONST = TAB.RETAILER;
	detail$: any;
	tabArr: TabModel[];
	activeTab = 'info';

	constructor(private bsModalRef: BsModalRef) {}

	ngOnInit() {
		this.tabArr = [
			{
				tabName: this.STUDENT.PROFILES,
				tabTag: this.STUDENT_TAB_CONST.INFO
			},
			{
				tabName: this.STUDENT.GRADES,
				tabTag: this.STUDENT_TAB_CONST.GRADES
			},
			{
				tabName: this.STUDENT.TTABLE,
				tabTag: this.STUDENT_TAB_CONST.TTABLE
			},

		];
	}

	onTabClicked(e: any) {
		this.activeTab = e.tabTag;
	}

	closeDialog() {
		this.bsModalRef.hide();
	}
}
