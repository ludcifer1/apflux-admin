import {
	Component,
	OnInit,
	TemplateRef,
	ViewChild,
	ViewEncapsulation
} from '@angular/core';
import {
	DateColumn,
	DropdownFilter,
	IDataTable,
	TableButton,
	TextColumn,
	TextFilter
} from '@logixtek/data-table';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import { finalize, switchMap } from 'rxjs/operators';

import { RETAILER } from '@app/shared/constants';
import { RetailerInfoDetailComponent } from '../retailer-info-detail/retailer-info-detail.component';
import { RetailerInfoStoreService } from '@app/root-store/store-services-manager/retailer-info.store.service';
import { RetailerService } from '@app/core/services/retailer.service';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { NGXSPINNER } from '@app/shared/constants/ngx-spinner.constant';

@Component({
	selector: 'retailer-info',
	templateUrl: './retailer-info.component.html',
	styleUrls: ['./retailer-info.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class RetailerInfoComponent implements OnInit {
	// ================================================
	// =              ATTRIBUTES SECTION              =
	// ================================================
	@ViewChild('statusCol', { static: true })
	statusColRef: TemplateRef<any>;
	bsModalRef: BsModalRef;
	config: IDataTable;
	modalConfig: ModalOptions;
	RETAILER_CONST = RETAILER;
	// ================================================
	// =             CONSTRUCTOR SECTION              =
	// ================================================

	constructor(
		private retailerStoreService: RetailerInfoStoreService,
		private retailerService: RetailerService,
		private spinner: NgxSpinnerService,
		private modalService: BsModalService
	) {}

	ngOnInit() {
		this.config = {
			title: RETAILER.TEXT.RETAILER_LIST,
			dataService: this.retailerService,
			controlButtons: [
				new TableButton({
					label: RETAILER.TEXT.NEW_SHOP,
					icon: 'fa fa-plus',
					color: 'primary'
				})
			],
			columns: [
				new TextColumn({
					field: 'userName',
					columnDisplayName: RETAILER.TEXT.RETAILER_UN
				}),
				new TextColumn({
					field: 'shopName',
					columnDisplayName: RETAILER.TEXT.RETAILER_NAME
				}),
				new TextColumn({
					field: 'fullAddress',
					columnDisplayName: RETAILER.TEXT.RETAILER_ADDRESS
				}),
				new DateColumn({
					field: 'latestOrder',
					columnDisplayName: RETAILER.TEXT.RETAILER_LATESTORDER
				})
			],
			filters: [
				new TextFilter('userNameOrShopName', {
					columnSpan: 1,
					placeholder: 'Search'
				})
			]
		};
		this.modalConfig = {
			backdrop: true,
			ignoreBackdropClick: true,
			class: 'modal-xxl'
		};
	}

	// ================================================
	// =              BUSINESS METHODS                =
	// ================================================
	onRetailerSelect(item: any) {
		this.spinner.show('rtSpinner', NGXSPINNER);
		this.retailerStoreService
			.loadRetailerInfoDetailbyCode(item.retailerCode)
			.pipe(
				switchMap((res: any) => {
					if (res.isCreatedAccount) {
						return this.retailerStoreService.loadRetailerB2CInfo(item.userName);
					}
					return Observable.of(res);
				}),
				finalize(() => this.spinner.hide('rtSpinner'))
			)
			.subscribe(res => {
				if (res) {
					this.bsModalRef = this.modalService.show(
						RetailerInfoDetailComponent,
						this.modalConfig
					);
				}
			});
	}

	// ================================================
	// =                   UI METHOD                  =
	// ================================================

	getItemStatusString(status: boolean): string {
		return status
			? this.RETAILER_CONST.STATUS.ACTIVE
			: this.RETAILER_CONST.STATUS.DEACTIVE;
	}

	getItemCssClassByType(status: boolean): string {
		return status ? 'success' : 'danger';
	}
}
