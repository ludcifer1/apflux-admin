import { Component, OnInit } from '@angular/core';
import { TabModel } from '@app/shared/models/tab.model';
import { TAB } from '@app/shared/constants/tab.constant';
import { BsModalRef } from 'ngx-bootstrap';
import { DISTRIBUTOR_DETAIL } from '@app/shared/constants/distributor.constant';

@Component({
	selector: 'kt-distributor-profile-detail',
	templateUrl: './distributor-profile-detail.component.html',
	styleUrls: ['./distributor-profile-detail.component.scss']
})
export class DistributorProfileDetailComponent implements OnInit {
	tabArr: TabModel[];
	activeTab = 'info';
	DISTRIBUTOR = DISTRIBUTOR_DETAIL;
	TAB_STRING_CONST = TAB.DISTRIBUTOR;

	constructor(private bsModalRef: BsModalRef) {}

	ngOnInit() {
		this.tabArr = [
			{
				tabName: this.DISTRIBUTOR.DT_TAB_INFO,
				tabTag: this.TAB_STRING_CONST.INFO
			}
		];
	}
	onTabClicked(e: any) {
		this.activeTab = e.tabTag;
	}

	closeDialog() {
		this.bsModalRef.hide();
	}
}
