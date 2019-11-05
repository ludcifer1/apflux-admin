import { Component, OnInit } from '@angular/core';
import { TabModel } from '@app/shared/models/tab.model';
import { IMPLEMENTER } from '@app/shared/constants/implementer.constant';

@Component({
	selector: 'news',
	templateUrl: './news.component.html',
	styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
	IMPLEMENTER = IMPLEMENTER;
	tabArr: TabModel[];
	constructor() {}

	ngOnInit() {
		this.tabArr = [
			{
				tabName: IMPLEMENTER.PROFILES,
				tabLink: './news-list'
			}
		];
	}
}
