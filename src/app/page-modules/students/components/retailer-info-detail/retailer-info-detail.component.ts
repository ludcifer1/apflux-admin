import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RETAILER } from '@app/shared/constants';
import { TabModel } from '@app/shared/models/tab.model';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { TAB } from '@app/shared/constants/tab.constant';

@Component({
	selector: 'retailer-info-detail',
	templateUrl: './retailer-info-detail.component.html',
	styleUrls: ['./retailer-info-detail.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class RetailerInfoDetailComponent implements OnInit {
	RETAILER = RETAILER.TEXT;
	RETAILER_TAB_CONST = TAB.RETAILER;
	detail$: any;
	tabArr: TabModel[];
	activeTab = 'info';

	constructor(private bsModalRef: BsModalRef) {}

	ngOnInit() {
		this.tabArr = [
			{
				tabName: this.RETAILER.PROFILES,
				tabTag: this.RETAILER_TAB_CONST.INFO
			},
			{
				tabName: this.RETAILER.STORAGE,
				tabTag: this.RETAILER_TAB_CONST.INV
			},
			{
				tabName: this.RETAILER.ORDERS,
				tabTag: this.RETAILER_TAB_CONST.ORDS
			},
			{
				tabName: this.RETAILER.SELLOUT,
				tabTag: this.RETAILER_TAB_CONST.SELLOUT
			},
			{
				tabName: this.RETAILER.DEVICES,
				tabTag: this.RETAILER_TAB_CONST.DEVICES
			},
			{
				tabName: this.RETAILER.CONTRACTS,
				tabTag: this.RETAILER_TAB_CONST.CONTRACTS
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
