import { Component, OnInit } from '@angular/core';
import {
	IDataTable,
	TextColumn,
	DropdownFilter,
	TextFilter,
	DateColumn,
	ReloadButton
} from '@logixtek/data-table';
import { BsModalRef, ModalOptions, BsModalService } from 'ngx-bootstrap';
import { IMPLEMENTER } from '@app/shared/constants/implementer.constant';
import { ImplementerStoreService } from '@app/root-store/store-services-manager/implementer.store.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NewsDetailComponent } from '../news-detail/news-detail.component';
import { NGXSPINNER } from '@app/shared/constants';
import { NewsAddComponent } from '../news-add/news-add.component';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

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

	constructor(private impStoreService: ImplementerStoreService, private spinner: NgxSpinnerService,
		private modalService: BsModalService
	) { }

	ngOnInit() {
		this.config = {
			title: 'Quản lý tin tức',
			dataService: this.impStoreService,
			controlButtons: [
				new ReloadButton({
					label: 'Thêm Tin Tức',
					icon: 'fa fa-plus',
					color: 'primary',
					callBackFunc: () => this.newNews()
				})
			],
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
		this.modalConfig = {
			backdrop: true,
			ignoreBackdropClick: true,
			class: 'modal-xxl',

		};
	}

	onNewsSelected(item:any){
		this.spinner.show('impSpinner', NGXSPINNER);

		this.modalConfig = {
			...this.modalConfig,
			initialState: { data: item }
		}

		setTimeout(() => {
			this.spinner.hide('impSpinner');
			this.bsModalRef = this.modalService.show(
				NewsDetailComponent,
				this.modalConfig
			);
		}, 1500);
	}

	newNews() {
		const modalRef = this.modalService.show(
			NewsAddComponent,
			this.modalConfig
		);
		return modalRef.content.result.pipe(
			map(res => {
				if (res) {
				}
				return true;
			}),
			catchError(err => {
				return throwError(err);
			})
		);
	}
}
