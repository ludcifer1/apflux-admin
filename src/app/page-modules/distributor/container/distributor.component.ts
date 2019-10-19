import { Component, OnInit } from '@angular/core';
import { DISTRIBUTOR } from '@app/shared/constants/distributor.constant';
import { TabModel } from '@app/shared/models/tab.model';

@Component({
	selector: 'kt-distributor',
	templateUrl: './distributor.component.html',
	styleUrls: ['./distributor.component.scss']
})
export class DistributorComponent implements OnInit {
	DISTRIBUTOR = DISTRIBUTOR.TEXT;
	tabArr: TabModel[];

	constructor() {}

	ngOnInit() {
		this.tabArr = [
			{
				tabName: DISTRIBUTOR.PROFILES,
				tabLink: './dt-list'
			}
		];
	}
}
