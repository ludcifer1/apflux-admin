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
import { switchMap, finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { NGXSPINNER } from '@app/shared/constants/ngx-spinner.constant';
import { SubjectDetailComponent } from '../subject-detail/subject-detail.component';
import { StudentDetailComponent } from '@app/page-modules/students/components/student-detail/student-detail.component';

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
	) { }

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
					field: 'subject_credit',
					columnDisplayName: 'Số tín chỉ'
				})
			]
		};

		this.modalConfig = {
			backdrop: true,
			ignoreBackdropClick: true,
			class: 'modal-l',

		};
	}

	onSubjectSelected(item: any) {
		this.spinner.show('manuSpinner', NGXSPINNER);

		this.modalConfig = {
			...this.modalConfig,
			initialState: { data: item }
		}

		setTimeout(() => {
			this.spinner.hide('manuSpinner');
			this.bsModalRef = this.modalService.show(
				SubjectDetailComponent,
				this.modalConfig
			);
		}, 1500);
	}
}
