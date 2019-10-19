import { Component, OnInit } from '@angular/core';
import { TabModel } from '@app/shared/models/tab.model';
import { MANUFACTURER } from '@app/shared/constants/manufacturer.constant';

@Component({
	selector: 'kt-manufacturer',
	templateUrl: './manufacturer.component.html',
	styleUrls: ['./manufacturer.component.scss']
})
export class ManufacturerComponent implements OnInit {
	MANUFACTURER = MANUFACTURER.TEXT;
	tabArr: TabModel[];
	constructor() {}

	ngOnInit() {
		this.tabArr = [
			{
				tabName: MANUFACTURER.PROFILES,
				tabLink: './profiles'
			}
		];
	}
}
