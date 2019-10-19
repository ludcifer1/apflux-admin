import { Component, OnInit, Input } from '@angular/core';
import * as _moment from 'moment';
import {UTILS } from '@app/shared/constants';
import { RetailerContractStoreService } from '@app/root-store/store-services-manager/retailer-contract.store.service';
import { RetailerContract, RetaileContractPayment } from '@app/shared/models/retailer.model';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
	selector: 'r-contract-payment',
	templateUrl: './r-contract-payment.component.html',
	styleUrls: ['./r-contract-payment.component.scss']
})
export class RContractPaymentComponent implements OnInit {
	@Input() contractModel: any;
	contract: any;
	paymentList: RetaileContractPayment[] = [];
	CONST_CUR = UTILS.CURRENT_CURRENCY;
	constructor(
		private retailerContractStoreService: RetailerContractStoreService,
		private spinner: NgxSpinnerService
	) {
	}

	ngOnInit() {
		this.contract = this.contractModel.value;
		this.paymentList = [
			{
				paymentDate: '2019-02-19T11:14:19.08',
				paidAmt: '300.000',
				paymentType: 'Tiền mặt',
				order: '',
				author: 'retailer01'
			},
			{
				paymentDate: '2019-02-19T11:14:19.08',
				paidAmt: '300.000',
				paymentType: 'Tiền mặt',
				order: '',
				author: 'retailer01'
			},
			{
				paymentDate: '2019-02-19T11:14:19.08',
				paidAmt: '300.000',
				paymentType: 'Tiền mặt',
				order: '',
				author: 'retailer01'
			},
			{
				paymentDate: '2019-02-19T11:14:19.08',
				paidAmt: '300.000',
				paymentType: 'Tiền mặt',
				order: '',
				author: 'retailer01'
			}
			
		];
	}
}
