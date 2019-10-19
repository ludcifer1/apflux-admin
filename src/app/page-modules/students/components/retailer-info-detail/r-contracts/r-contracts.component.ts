import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { FORM } from '@app/shared/constants/form.constant';
import * as _moment from 'moment';
import { FORMAT, UTILS } from '@app/shared/constants';
import { RetailerContractStoreService } from '@app/root-store/store-services-manager/retailer-contract.store.service';
import { RetailerContract } from '@app/shared/models/retailer.model';
import { NgxSpinnerService } from 'ngx-spinner';
import { NGXSPINNER } from '@app/shared/constants/ngx-spinner.constant';

@Component({
	selector: 'r-contracts',
	templateUrl: './r-contracts.component.html',
	styleUrls: ['./r-contracts.component.scss']
})
export class RContractsComponent implements OnInit {
	contractForm: FormGroup;
	contractFormList: FormArray;
	data: RetailerContract[];
	CONST_CUR = UTILS.CURRENT_CURRENCY;
	constructor(
		private _fb: FormBuilder,
		private retailerContractStoreService: RetailerContractStoreService,
		private spinner: NgxSpinnerService
	) {
		this.createContractFormArray();
		this.contractFormList = this.contractForm.get(
			'contractFormList'
		) as FormArray;
	}

	ngOnInit() {
		this.spinner.show('contractSpinner', NGXSPINNER);
		this.retailerContractStoreService.getContracts('').subscribe();
		this.retailerContractStoreService
			.getContractListFromStore()
			.subscribe(res => {
				this.data = res;
				const dataLenght = this.data.length;
				for (let i = 0; i < dataLenght; i++) {
					this.pushContractToArray();
				}
				this.patchValuetoFormArray(this.data, this.contractFormList);
				this.spinner.hide('contractSpinner');
			});
	}

	// ================================================
	// =                                              =
	// ================================================
	trackByFn(index: any) {
		return index;
	}

	viewHistoryContract(contract) {
		contract.isHCollapsed = !contract.isHCollapsed;
		contract.isPCollapsed = false;
	}

	viewPaymentDetailContract(contract) {
		contract.isPCollapsed = !contract.isPCollapsed;
		contract.isHCollapsed = false;
	}

	private createContractForm() {
		const formControls = FORM.CONTRACT_FORM;
		return this._fb.group(formControls);
	}
	private createContractFormArray() {
		this.contractForm = this._fb.group({
			contractFormList: this._fb.array([])
		});
	}

	private patchValuetoFormArray(data: any | any[], formArray?: FormArray) {
		if (formArray && data) {
			formArray.controls.map((control, i) => {
				control.patchValue(data[i]);
				const startDate = _moment
					.parseZone(data[i].effectiveDate)
					.format(FORMAT.DATE_MOMENT);
				const nationalIdentityCreateDate = _moment
					.parseZone(data[i].representativeIssueDate)
					.format(FORMAT.DATE_MOMENT);
				control.patchValue({
					startDate: startDate,
					representative: data[i].representativeName,
					nationalIdentity: data[i].representativeId,
					contractLength: data[i].contractLength,
					nationalIdentityCreateDate: nationalIdentityCreateDate,
					monthlyPayment: data[i].monthlyPaidAmt,
					paid: data[i].alreadyPaidAmt,
					remainingPayment: data[i].remainingAmt
				});
			});
		}
	}

	private pushContractToArray() {
		this.contractFormList = this.contractForm.get(
			'contractFormList'
		) as FormArray;
		this.contractFormList.push(this.createContractForm());
	}
}
