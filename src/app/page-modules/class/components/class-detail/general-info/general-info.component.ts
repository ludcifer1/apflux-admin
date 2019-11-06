import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DISTRIBUTOR } from '@app/shared/constants/distributor.constant';
import { ToastrService } from 'ngx-toastr';
import { FORM } from '@app/shared/constants/form.constant';
import {
	TEXT,
	RETAILER,
	PATTERN,
	CHANGE_PASSWORD_ALERT_OPTION
} from '@app/shared/constants';
import { DistributorStoreService } from '@app/root-store/store-services-manager/distributor.store.service';
import { DistributorModel } from '@app/shared/models/distributor.model';
import { SweetAlertOptions } from 'sweetalert2';

@Component({
	selector: 'd-general-info',
	templateUrl: './general-info.component.html',
	styleUrls: ['./general-info.component.scss']
})
export class GeneralInfoComponent implements OnInit, OnDestroy {
	isPasswordValidated = false;
	isShowPassword = false;
	currentPassword: string;
	accountDetail: any;
	detailForm: FormGroup;
	DISTRIBUTOR_CONST = DISTRIBUTOR;
	dataSub: Subscription;
	selectedDtData = null;
	isCreatedAccount = null;
	RETAILER_CONST = RETAILER;
	alertOption: SweetAlertOptions;
	passwordRegex = new RegExp(PATTERN.REG_EXP_PASSWORD);

	constructor(
		private fb: FormBuilder,
		private toast: ToastrService,
		private dtStoreService: DistributorStoreService
	) {
		this.detailForm = this.createDetailInformationForm();
	}

	ngOnInit() {
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
	ngOnDestroy(): void {
		this.accountDetail = null;
		this.isCreatedAccount = null;
		this.selectedDtData = null;
		this.dataSub.unsubscribe();
	}
	acceptChangeStatus() {
		this.dtStoreService
			.changeManufacturerB2CStatus(
				this.accountDetail.userName,
				this.accountDetail.isActive
			)
			.subscribe((res: any) => {
				if (res && res.successful) {
					this.toast.success(
						TEXT.MESSAGE.CHANGE_SUCCESS,
						TEXT.TOAST.NOTIFICATION
					);
				} else {
					this.toast.error(TEXT.MESSAGE.CHANGE_FAIL, TEXT.TOAST.NOTIFICATION);
				}
			});
	}

	changePassword(password: string) {
		if (password) {
			this.dtStoreService
				.resetAccountPassword(this.accountDetail.userName, password)
				.subscribe(res => {
					if (res && res.successful) {
						this.toast.success(
							TEXT.MESSAGE.PASSWORD_CHANGE_SUCCESS,
							TEXT.TOAST.NOTIFICATION
						);
					} else {
						this.toast.error(
							TEXT.MESSAGE.PASSWORD_CHANGE_FAIL,
							TEXT.TOAST.NOTIFICATION
						);
					}
				});
		}
	}
	loadState() {
		this.dataSub = this.dtStoreService
			.getDistributorDetail()
			.subscribe((res: DistributorModel) => {
				if (res) {
					this.selectedDtData = res;
					this.detailForm.patchValue(this.selectedDtData);
					this.detailForm.patchValue({
						establishedDate: res.getEstablishedDateString()
					});
				}
			});
		if (this.selectedDtData.isCreatedAccount) {
			this.dtStoreService.getDistributorB2CDetail().subscribe(res => {
				this.isCreatedAccount = true;
				this.accountDetail = res;
			});
		}
	}

	declineChangeStatus() {
		this.accountDetail.isActive = !this.accountDetail.isActive;
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
	get isB2CActive() {
		return this.detailForm.get('isB2CActive');
	}

	private createDetailInformationForm() {
		const formControls = FORM.DISTRIBUTOR_INFO_FORM;
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
