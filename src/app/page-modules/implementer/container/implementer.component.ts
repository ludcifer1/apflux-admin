import { Component, OnInit } from '@angular/core';
import { TabModel } from '@app/shared/models/tab.model';
import { IMPLEMENTER } from '@app/shared/constants/implementer.constant';

@Component({
	selector: 'kt-implementer',
	templateUrl: './implementer.component.html',
	styleUrls: ['./implementer.component.scss']
})
export class ImplementerComponent implements OnInit {
	IMPLEMENTER = IMPLEMENTER;
	tabArr: TabModel[];
	constructor() {}

	ngOnInit() {
		this.tabArr = [
			{
				tabName: IMPLEMENTER.PROFILES,
				tabLink: './imp-profiles'
			}
		];
	}
}
