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

import { StudentService } from '@app/core/services/student.service';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { NGXSPINNER } from '@app/shared/constants/ngx-spinner.constant';
import { StudentStoreService } from '@app/root-store/store-services-manager/retailer-info.store.service';
import { StudentDetailComponent } from '../student-detail/student-detail.component';
import { StudentNewComponent } from '../student-new/student-new.component';

@Component({
	selector: 'student-list',
	templateUrl: './student-list.component.html',
	styleUrls: ['./student-list.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class StudentListComponent implements OnInit {
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
		private retailerStoreService: StudentStoreService,
		private studentService: StudentService,
		private spinner: NgxSpinnerService,
		private modalService: BsModalService
	) {}

	ngOnInit() {
		this.config = {
			title: 'Danh sách sinh viên',
			dataService: this.studentService,
			controlButtons: [
				new TableButton({
					label: 'Thêm Sinh Viên',
					icon: 'fa fa-plus',
					color: 'primary',
					callBackFunc: () => this.newStudent()
				})
			],
			columns: [
				new TextColumn({
					field: 'student_id',
					columnDisplayName: 'MSSV'
				}),
				new TextColumn({
					field: 'name',
					columnDisplayName: 'Họ & Tên'
				}),
				new TextColumn({
					field: 'username',
					columnDisplayName: 'Tên Đăng Nhập'
				}),
				new TextColumn({
					field: 'specialize',
					columnDisplayName: 'Nghành'
				}),
				new DateColumn({
					field: 'start_date',
					columnDisplayName: 'Ngày Nhập Học'
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
	onStudentSelect(item: any) {
		this.spinner.show('rtSpinner', NGXSPINNER);
		// this.retailerStoreService
		// 	.loadRetailerInfoDetailbyCode(item.retailerCode)
		// 	.pipe(
		// 		finalize(() => this.spinner.hide('rtSpinner'))
		// 	)
		// 	.subscribe(res => {
		// 		if (res) {
		// 			this.bsModalRef = this.modalService.show(
		// 				StudentDetailComponent,
		// 				this.modalConfig
		// 			);
		// 		}
		// 	});
		setTimeout(() => {
			this.retailerStoreService
				.loadRetailerInfoDetailbyCode(item)
				.pipe(finalize(() => this.spinner.hide('rtSpinner')))
				.subscribe(
					res =>
						(this.bsModalRef = this.modalService.show(
							StudentDetailComponent,
							this.modalConfig
						))
				);
		}, 1500);
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
	newStudent() {
		return (this.bsModalRef = this.modalService.show(
			StudentNewComponent,
			this.modalConfig
		));
	}
}
