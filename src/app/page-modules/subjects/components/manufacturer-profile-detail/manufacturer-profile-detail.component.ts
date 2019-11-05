import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { TabModel } from '@app/shared/models/tab.model';
import { MANU_DETAIL } from '@app/shared/constants/manufacturer.constant';
import { TAB } from '@app/shared/constants/tab.constant';

@Component({
	selector: 'manufacturer-profile-detail',
	templateUrl: './manufacturer-profile-detail.component.html',
	styleUrls: ['./manufacturer-profile-detail.component.scss']
})
export class ManufacturerProfileDetailComponent implements OnInit {
	tabArr: TabModel[];
	activeTab = 'info';
	MANU = MANU_DETAIL;
	TAB_STRING_CONST = TAB.MANU;

	constructor(private bsModalRef: BsModalRef) {}

	ngOnInit() {
		this.tabArr = [
			{
				tabName: this.MANU.MANU_TAB_INFO,
				tabTag: this.TAB_STRING_CONST.INFO
			},
			{
				tabName: this.MANU.MANU_TAB_PROMO,
				tabTag: this.TAB_STRING_CONST.PROMO
			},
			{
				tabName: this.MANU.MANU_TAB_REGIONS,
				tabTag: this.TAB_STRING_CONST.REGION
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
