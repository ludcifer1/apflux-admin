import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RETAILER } from '@app/shared/constants';
import { TabModel } from '@app/shared/models/tab.model';

@Component({
	selector: 'app-retailer',
	templateUrl: './retailer.component.html',
	styleUrls: ['./retailer.component.scss'],
	// encapsulation: ViewEncapsulation.None
})
export class RetailerComponent implements OnInit {
	RETAILER = RETAILER.TEXT;
	tabArr: TabModel[];

	constructor() {}

	ngOnInit() {
		this.tabArr = [
			{
				tabName: this.RETAILER.PROFILES,
				tabLink: './info'
			},
		];
	}
}
