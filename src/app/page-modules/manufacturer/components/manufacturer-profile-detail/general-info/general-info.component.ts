import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RETAILER, TEXT, PATTERN, CHANGE_PASSWORD_ALERT_OPTION } from '@app/shared/constants';
import { FORM } from '@app/shared/constants/form.constant';
import { Subscription } from 'rxjs';
import { ManufacturerStoreService } from '@app/root-store/store-services-manager/manufacturer.store.service';
import { ManufacturerModel } from '@app/shared/models/manufacturer.model';
import { ToastrService } from 'ngx-toastr';
import Swal, { SweetAlertOptions } from 'sweetalert2';



@Component({
	selector: 'm-general-info',
	templateUrl: './general-info.component.html',
	styleUrls: ['./general-info.component.scss']
})
export class ManuDetailGeneralInfoComponent implements OnInit, OnDestroy {
	isPasswordValidated = false;
	isShowPassword = false;
	currentPassword: string;
	alertOption: SweetAlertOptions;
	passwordRegex = new RegExp(PATTERN.REG_EXP_PASSWORD);

	accountDetail: any;
	detailForm: FormGroup;
	RETAILER_CONST = RETAILER;
	dataSub: Subscription;
	selectedManuData = null;
	isCreatedAccount = null;

	constructor(
		private fb: FormBuilder,
		private manuStoreService: ManufacturerStoreService,
		private toast: ToastrService
	) {
		this.detailForm = this.createDetailInformationForm();
	}
	ngOnInit() {
		this.dataSub = this.manuStoreService
			.getManufacturerDetail()
			.subscribe((res: ManufacturerModel) => {
				if (res) {
					this.selectedManuData = res;
					this.detailForm.patchValue(this.selectedManuData);
					this.detailForm.patchValue({
						establishedDate: res.getEstablishedDateString(),
						joinedDate: res.getJoinedDateString()
					});
				}
			});
		if (this.selectedManuData.isCreatedAccount) {
			this.manuStoreService.getManufacturerB2CDetail().subscribe(res => {
				this.isCreatedAccount = true;
				this.accountDetail = res;
			});
		}

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

	acceptChangeStatus() {
		this.manuStoreService
			.changeManufacturerB2CStatus(
				this.accountDetail.userName,
				this.accountDetail.isActive
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

	changePassword(password: string) {
		if (password) {
			this.manuStoreService
				.resetAccountPassword(this.accountDetail.userName, password)
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

	ngOnDestroy(): void {
		this.accountDetail = null;
		this.isCreatedAccount = null;
		this.selectedManuData = null;
		this.dataSub.unsubscribe();
	}
	// ================================================
	// =              PRIVATE METHODS                 =
	// ================================================
	private createDetailInformationForm() {
		const formControls = FORM.MANUFACTURER_INFO_FORM;
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
