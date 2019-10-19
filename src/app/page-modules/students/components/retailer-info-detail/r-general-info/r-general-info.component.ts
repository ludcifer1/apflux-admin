import { Component, OnInit, Input, OnDestroy, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RetailerInfoStoreService } from '@app/root-store/store-services-manager/retailer-info.store.service';
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

@Component({
	selector: 'r-general-info',
	templateUrl: './r-general-info.component.html',
	styleUrls: ['./r-general-info.component.scss']
})
export class RGeneralInfoComponent implements OnInit, OnDestroy {
	isPasswordValidated = false;
	isShowPassword = false;
	currentPassword: string;
	alertOption: SweetAlertOptions;
	detailInfo: any;
	detailForm: FormGroup;
	dataSub: Subscription;
	selectedRetailerData: RetailerInfo;
	isCreatedAccount = false;
	RETAILER_CONST = RETAILER;
	FORMAT_CONST = FORMAT;

	passwordRegex = new RegExp(PATTERN.REG_EXP_PASSWORD);

	constructor(
		private fb: FormBuilder,
		private retailerStoreService: RetailerInfoStoreService,
		private toast: ToastrService,
		public readonly swalTargets: SwalPartialTargets
	) {
		this.detailForm = this.createDetailInformationForm();
	}

	ngOnInit() {
		this.currentPassword = '';
		this.loadState();
		this.alertOption = CHANGE_PASSWORD_ALERT_OPTION;
		this.alertOption.inputValidator = value => {
			if (!value) {
				return TEXT.MESSAGE.PASSWORD_ERR_NOPW;
			}
			if (!this.isPasswordMatchedRegrex(value)) {
				return TEXT.MESSAGE.PASSWORD_ERR_UNSAFE;
			}
		};
	}
	// ================================================
	// =              BUSINESS METHODS                =
	// ================================================

	acceptChangeStatus() {
		this.retailerStoreService
			.changeRetailerB2CStatus(
				this.detailInfo.userName,
				this.detailInfo.isActive
			)
			.subscribe((res: any) => {
				if (res && res.successful) {
					this.toast.success(
						TEXT.MESSAGE.CHANGE_SUCCESS,
						TEXT.TOAST.NOTIFICATION,

					);
				} else {
					this.toast.error(
						TEXT.MESSAGE.CHANGE_FAIL,
						TEXT.TOAST.NOTIFICATION,

					);
				}
			});
	}
	declineChangeStatus() {
		this.detailInfo.isActive = !this.detailInfo.isActive;
	}

	getItemStatusString(status: string | boolean): string {
		if (status === 'no-account') {
			return this.RETAILER_CONST.TEXT.NO_ACC;
		}
		return status
			? this.RETAILER_CONST.STATUS.ACTIVE
			: this.RETAILER_CONST.STATUS.DEACTIVE;
	}

	getItemCssClassByType(status: string | boolean): string {
		if (status === 'no-account') {
			return 'secondary';
		}
		return status ? 'success' : 'danger';
	}
	changePassword(password: string) {
		if (password) {
			this.retailerStoreService
				.resetAccountPassword(this.detailInfo.userName, password)
				.subscribe(res => {
					if (res && res.successful) {
						this.toast.success(
							TEXT.MESSAGE.PASSWORD_CHANGE_SUCCESS,
							TEXT.TOAST.NOTIFICATION,

						);
					} else {
						this.toast.error(
							TEXT.MESSAGE.PASSWORD_CHANGE_FAIL,
							TEXT.TOAST.NOTIFICATION,

						);
					}
				});
		}
	}
	showHidePassword() {
		this.isShowPassword = !this.isShowPassword;
	}
	ngOnDestroy(): void {
		this.detailInfo = null;
		this.isCreatedAccount = false;
		this.selectedRetailerData = null;
		this.dataSub.unsubscribe();
	}
	// ================================================
	// =              PRIVATE METHODS                 =
	// ================================================
	loadState() {
		this.dataSub = this.retailerStoreService
			.getRetailerInfoDetailFromStore()
			.subscribe(res => {
				this.selectedRetailerData = res;
			});

		this.detailForm.patchValue(this.selectedRetailerData);
		const birthday = moment
			.parseZone(this.selectedRetailerData.birthday)
			.format(this.FORMAT_CONST.DATE_MOMENT);
		this.detailForm.patchValue({ birthday: birthday });

		if (this.selectedRetailerData.isCreatedAccount) {
			this.retailerStoreService.getB2CDetail().subscribe(res => {
				if (res) {
					this.isCreatedAccount = true;
					this.detailInfo = res;
				}
			});
		}
	}

	get isB2CActive() {
		return this.detailForm.get('isB2CActive');
	}

	private createDetailInformationForm() {
		const formControls = FORM.GENERAL_FORM;
		return this.fb.group(formControls);
	}
	private isPasswordMatchedRegrex(password: string) {
		if (this.passwordRegex.test(password)) {
			this.changePassword(password);
			return true;
		} else {
			return false;
		}
	}
}
