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
import { DistributorProfileDetailComponent } from '../distributor-profile-detail/distributor-profile-detail.component';
import { finalize, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { NGXSPINNER } from '@app/shared/constants/ngx-spinner.constant';
import { ManufacturerStoreService } from '@app/root-store/store-services-manager/manufacturer.store.service';

@Component({
	selector: 'distributor-list',
	templateUrl: './distributor-list.component.html',
	styleUrls: ['./distributor-list.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class DistributorListComponent implements OnInit {
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
			title: 'Quản lý Điểm',
			dataService: this.dtStoreService,
			controlButtons: [],
			columns: [
			// 	new TextColumn({
			// 		field: 'userName',
			// 		columnDisplayName: DISTRIBUTOR.DT_USERNAME
			// 	}),
			// 	new TextColumn({
			// 		field: 'manufacturerDistributorName',
			// 		columnDisplayName: DISTRIBUTOR.DT_NAME
			// 	}),
			// 	new TextColumn({
			// 		field: 'fullAddress',
			// 		columnDisplayName: DISTRIBUTOR.ADDRESS
			// 	}),
			// 	new TextColumn({
			// 		field: 'manufacturerName',
			// 		columnDisplayName: DISTRIBUTOR.DISTRIBUTOR
			// 	})
			// ],
			// filters: [
			// 	new TextFilter('userNameOrDistributorName', {
			// 		columnSpan: 1,
			// 		placeholder: 'Search'
			// 	}),
			// 	new DropdownFilter({
			// 		fieldToFilter: 'manufacturerCode',
			// 		placeholder: 'Nhà sản xuất',
			// 		itemValueField: 'manufacturerCode',
			// 		itemLabelField: 'manufacturerName',
			// 		itemSource: this.manuStoreService.loadManufacturerforFilter()
			// 	})
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
						DistributorProfileDetailComponent,
						this.modalConfig
					);
				}
			});
	}
}
