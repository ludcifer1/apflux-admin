import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { FORM } from '@app/shared/constants/form.constant';
import * as _moment from 'moment';
import { FORMAT, UTILS } from '@app/shared/constants';
import { RetailerContractStoreService } from '@app/root-store/store-services-manager/retailer-contract.store.service';
import { RetailerContractHistory, RetailerContract } from '@app/shared/models/retailer.model';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
	selector: 'r-contract-history',
	templateUrl: './r-contract-history.component.html',
	styleUrls: ['./r-contract-history.component.scss']
})
export class RContractHistoryComponent implements OnInit {
	@Input() contractModel: any;
	contract: any;
	historyList: RetailerContractHistory[] = [];
	CONST_CUR = UTILS.CURRENT_CURRENCY;
	constructor(
		private retailerContractStoreService: RetailerContractStoreService,
		private spinner: NgxSpinnerService
	) {
	}

	ngOnInit() {
		this.contract = this.contractModel.value;
		this.historyList = [
			{
				createdDate: '2019-02-19T11:14:19.08',
				description: 'Thay đổi hợp đồng sang 4.600.000',
				user: 'retailer01'
			},
			{
				createdDate: '2019-02-19T11:14:19.08',
				description: 'Thay đổi hợp đồng sang 4.600.000',
				user: 'retailer01'
			},
			{
				createdDate: '2019-02-19T11:14:19.08',
				description: 'Thay đổi hợp đồng sang 4.600.000',
				user: 'retailer01'
			},
			{
				createdDate: '2019-02-19T11:14:19.08',
				description: 'Thay đổi hợp đồng sang 4.600.000',
				user: 'retailer01'
			}
		];
	}

}
