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
	selector: 'subject-list',
	templateUrl: './subject-list.component.html',
	styleUrls: ['./subject-list.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class SubjectListComponent implements OnInit {
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
			title: 'Quản lý môn học',
			dataService: this.manuStoreService,
			// 	controlButtons: [],
			columns: [
				new TextColumn({
					field: 'subject_id',
					columnDisplayName: 'Mã môn học'
				}),
				new TextColumn({
					field: 'subject_name',
					columnDisplayName: 'Tên môn học'
				}),
				new TextColumn({
					field: 'teacher',
					columnDisplayName: 'Giáo viên'
				}),
				new TextColumn({
					field: 'subject_credit',
					columnDisplayName: 'Số tín chỉ'
				})
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
