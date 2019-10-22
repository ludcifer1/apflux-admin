import { Component, OnInit, Input, OnDestroy, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import swal, { SweetAlertOptions } from 'sweetalert2';
import { FORM } from '@app/shared/constants/form.constant';
import * as moment from 'moment';
import { Observable, Subscription } from 'rxjs';
import { RetailerInfo } from '@app/shared/models/retailer.model';
import {
	RETAILER,
	FORMAT,
	TEXT,
	PATTERN,
	CHANGE_PASSWORD_ALERT_OPTION
} from '@app/shared/constants/';
import { ToastrService } from 'ngx-toastr';
import {
	SwalPartialTargets,
	SwalComponent
} from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';
import { StudentStoreService } from '@app/root-store/store-services-manager/retailer-info.store.service';

@Component({
	selector: 'r-general-info',
	templateUrl: './r-general-info.component.html',
	styleUrls: ['./r-general-info.component.scss']
})
export class RGeneralInfoComponent implements OnInit, OnDestroy {
	alertOption: SweetAlertOptions;
	studentForm: FormGroup;
	majors: any[] = [];
	genders: any[] = [];
	specis: any[] = [];
	status: any[] = [];
	class: any[] = [];
	dataSub: Subscription;
	detailInfo: any;
	FORMAT_CONST: any;

	constructor(
		private fb: FormBuilder,
		private studentStoreService: StudentStoreService,
		private toast: ToastrService,
		public readonly swalTargets: SwalPartialTargets
	) {
		this.studentForm = this.createFormGroup();
		this.loadSpinnerData();
	}

	ngOnInit() {
		this.loadState();
	}
	// ================================================
	// =              BUSINESS METHODS                =
	// ================================================

	ngOnDestroy(): void {
		this.detailInfo = null;
		this.dataSub.unsubscribe();
	}
	// ================================================
	// =              PRIVATE METHODS                 =
	// ================================================
	loadState() {
		this.dataSub = this.studentStoreService
			.getRetailerInfoDetailFromStore()
			.subscribe(res => {
				this.detailInfo = res;
			});
		if (this.detailInfo) {
			this.studentForm.patchValue(this.detailInfo);
		}
			// const birthday = moment
			// 	.parseZone(this.detailInfo.birthday)
			// 	.format(this.FORMAT_CONST.DATE_MOMENT);
		// this.studentForm.patchValue({ birthday: birthday });
	}

	private createFormGroup() {
		const formControls = FORM.STUDENT_FORM;
		const tempForm = this.fb.group(formControls);
		return tempForm;
	}

	private loadSpinnerData() {
		this.genders = [
			{ id: 1, name: 'Nam' },
			{ id: 2, name: 'Nữ' },
			{ id: 3, name: 'Khác' }
		];
		this.majors = [
			{ id: 1, name: 'Công nghệ thông tin' },
			{ id: 2, name: 'Du lịch - Nhà hàng - Khách sạn' },
			{ id: 3, name: 'Thẩm mỹ - Làm đẹp' }
		];
		this.status = [{ id: 1, name: 'Học đi' }, { id: 2, name: 'Học lại' }];
		this.specis = [
			{ id: 1, name: 'Lập Trình Máy Tính/Thiết Bị Di Động' },
			{ id: 2, name: 'Thiết Kế Website' },
			{ id: 3, name: 'CNTT/ Ứng Dụng Phần Mềm' },
			{ id: 4, name: 'Thiết Kế Đồ Hoạ' },
			{ id: 5, name: 'Digital/ Online Marketing' },
			{ id: 6, name: 'Tổ Chức Sự Kiện' },
			{ id: 7, name: 'Marketing & Sales' },
			{ id: 8, name: 'Digital/ Online Marketing' }
		];
		this.class = [
			{ id: 1, name: 'PT13301' },
			{ id: 2, name: 'PT13302' },
			{ id: 3, name: 'PT13303' },
			{ id: 4, name: 'PT13304' },
			{ id: 5, name: 'PT13305' },
			{ id: 6, name: 'PT13306' },
			{ id: 7, name: 'PT13307' },
			{ id: 8, name: 'PT13308' }
		];
	}
	// private isPasswordMatchedRegrex(password: string) {
	// 	if (this.passwordRegex.test(password)) {
	// 		this.changePassword(password);
	// 		return true;
	// 	} else {
	// 		return false;
	// 	}
	// }
}
