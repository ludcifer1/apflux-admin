import {
	Component,
	OnInit,
	ViewChild,
	TemplateRef,
	ViewEncapsulation
} from '@angular/core';
import {
	IDataTable,
	TextColumn,
	TemplateColumn,
	TextFilter,
	DropdownFilter
} from '@logixtek/data-table';
import { MANUFACTURER } from '@app/shared/constants/manufacturer.constant';
import { RETAILER } from '@app/shared/constants';
import { ManufacturerStoreService } from '@app/root-store/store-services-manager/manufacturer.store.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap';
// tslint:disable-next-line:max-line-length
import { ManufacturerProfileDetailComponent } from '../manufacturer-profile-detail/manufacturer-profile-detail.component';
import { switchMap, finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { NGXSPINNER } from '@app/shared/constants/ngx-spinner.constant';

@Component({
	selector: 'time-table-list',
	templateUrl: './time-table-list.component.html',
	styleUrls: ['./time-table-list.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class TimeTableListComponent implements OnInit {
	config: IDataTable;
	bsModalRef: BsModalRef;
	modalConfig: ModalOptions;

	constructor(
		private manuStoreService: ManufacturerStoreService,
		private spinner: NgxSpinnerService,
		private modalService: BsModalService
	) {}

	ngOnInit() {
		this.config = {
			title: 'Quản lý thời khóa biểu',
			dataService: this.manuStoreService,
			// 	controlButtons: [],
			columns: [
				// 		new TextColumn({
				// 			field: 'userName',
				// 			columnDisplayName: MANUFACTURER.MANU_USERNAME
				// 		}),
				// 		new TextColumn({
				// 			field: 'manuName',
				// 			columnDisplayName: MANUFACTURER.MANU_NAME
				// 		}),
				// 		new TextColumn({
				// 			field: 'fullAddress',
				// 			columnDisplayName: MANUFACTURER.ADDRESS
				// 		})
				// 	],
				// 	filters: [
				// 		new TextFilter('userNameOrManufacturerName', {
				// 			columnSpan: 1,
				// 			placeholder: 'Search'
				// 		}),
			]
		};

		this.modalConfig = {
			backdrop: true,
			ignoreBackdropClick: true,
			class: 'modal-xxl'
		};
	}

	onManufacturerSelected(item: any) {
		this.spinner.show('manuSpinner', NGXSPINNER);
		this.manuStoreService
			.loadManufacturerDetailInfobyCode(item.manufacturerCode)
			.pipe(
				switchMap((res: any) => {
					if (res.isCreatedAccount) {
						return this.manuStoreService.loadManufacturerB2CInfo(item.userName);
					}
					return Observable.of(res);
				}),
				finalize(() => this.spinner.hide('manuSpinner'))
			)
			.subscribe(res => {
				if (res) {
					this.bsModalRef = this.modalService.show(
						ManufacturerProfileDetailComponent,
						this.modalConfig
					);
				}
			});
	}
}
