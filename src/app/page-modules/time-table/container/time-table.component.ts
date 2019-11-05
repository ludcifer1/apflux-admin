import { Component, OnInit } from '@angular/core';
import { TabModel } from '@app/shared/models/tab.model';
import { MANUFACTURER } from '@app/shared/constants/manufacturer.constant';

@Component({
	selector: 'time-table',
	templateUrl: './time-table.component.html',
	styleUrls: ['./time-table.component.scss']
})
export class TimeTableComponent implements OnInit {
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
