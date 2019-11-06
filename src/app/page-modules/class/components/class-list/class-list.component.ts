import {
	Component,
	OnInit,
	TemplateRef,
	ViewChild,
	ViewEncapsulation
} from '@angular/core';
import {
	IDataTable,
	TextFilter,
	DropdownFilter,
	TemplateColumn,
	TextColumn
} from '@logixtek/data-table';
import { DISTRIBUTOR } from '@app/shared/constants/distributor.constant';
import { DistributorStoreService } from '@app/root-store/store-services-manager/distributor.store.service';
import { RETAILER } from '@app/shared/constants';
import { ModalOptions, BsModalService, BsModalRef } from 'ngx-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { NGXSPINNER } from '@app/shared/constants/ngx-spinner.constant';
import { ManufacturerStoreService } from '@app/root-store/store-services-manager/manufacturer.store.service';
import { ClassDetailComponent } from '../class-detail/class-detail.component';

@Component({
	selector: 'class-list',
	templateUrl: './class-list.component.html',
	styleUrls: ['./class-list.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class ClassListComponent implements OnInit {
	config: IDataTable;
	bsModalRef: BsModalRef;
	modalConfig: ModalOptions;

	constructor(
		private dtStoreService: DistributorStoreService,
		private manuStoreService: ManufacturerStoreService,
		private spinner: NgxSpinnerService,
		private modalService: BsModalService
	) {}

	ngOnInit() {
		this.config = {
			title: 'Quản lý Lớp',
			dataService: this.dtStoreService,
			controlButtons: [],
			columns: [
				new TextColumn({
					field: 'id',
					columnDisplayName: 'id'
				}),
				new TextColumn({
					field: 'class_id',
					columnDisplayName: 'Mã Lớp'
				}),
				new TextColumn({
					field: 'class_name',
					columnDisplayName: 'Tên Lớp'
				})
			]
		};
		this.modalConfig = {
			backdrop: true,
			ignoreBackdropClick: true,
			class: 'modal-xxl'
		};
	}

	onDistributorSelected(item: any) {
		this.spinner.show('dtSpinner', NGXSPINNER);
		this.dtStoreService
			.loadDistributorDetailInfobyCode(item.manufacturerDistributorCode)
			.pipe(
				switchMap((res: any) => {
					if (res.isCreatedAccount) {
						return this.dtStoreService.loadDistributorB2CInfo(item.userName);
					}
					return Observable.of(res);
				}),
				finalize(() => this.spinner.hide('dtSpinner'))
			)
			.subscribe(res => {
				if (res) {
					this.bsModalRef = this.modalService.show(
						ClassDetailComponent,
						this.modalConfig
					);
				}
			});
	}
}
