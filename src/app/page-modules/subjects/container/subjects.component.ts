import { Component, OnInit } from '@angular/core';
import { TabModel } from '@app/shared/models/tab.model';
import { MANUFACTURER } from '@app/shared/constants/manufacturer.constant';

@Component({
	selector: 'subjects',
	templateUrl: './subjects.component.html',
	styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {
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
