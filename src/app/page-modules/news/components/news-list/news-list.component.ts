import { Component, OnInit } from '@angular/core';
import {
	IDataTable,
	TextColumn,
	DropdownFilter,
	TextFilter,
	DateColumn
} from '@logixtek/data-table';
import { BsModalRef, ModalOptions } from 'ngx-bootstrap';
import { IMPLEMENTER } from '@app/shared/constants/implementer.constant';
import { ImplementerStoreService } from '@app/root-store/store-services-manager/implementer.store.service';

@Component({
	selector: 'news-list',
	templateUrl: './news-list.component.html',
	styleUrls: ['./news-list.component.scss']
})
export class NewListComponent implements OnInit {
	config: IDataTable;
	bsModalRef: BsModalRef;
	modalConfig: ModalOptions;
	newsType: any[];

	constructor(private impStoreService: ImplementerStoreService) {}

	ngOnInit() {
		this.config = {
			title: 'Quản lý tin tức',
			dataService: this.impStoreService,
			controlButtons: [],
			columns: [
				new TextColumn({
					field: 'title',
					columnDisplayName: 'Tiêu đề'
				}),
				new TextColumn({
					field: 'post_meta',
					columnDisplayName: 'Người đăng'
				}),
				new TextColumn({
					field: 'news_type',
					columnDisplayName: 'Loại tin'
				}),
				new DateColumn({
					field: 'date',
					columnDisplayName: 'Ngày đăng'
				})
			]
		};
		this.newsType = [
			{
				id: 1,
				name: 'Thông tin học tập'
			},
			{
				id: 2,
				name: 'Thông tin hoạt động'
			},
			{
				id: 3,
				name: 'Thông tin học phí'
			}
		];
	}
}
