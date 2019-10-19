import * as _moment from 'moment';
import { FORMAT } from '../constants';
export class OrderModel {
	id: string;
	code: string;
	retailerCode: string;
	retailerName: string;
	shopName: string;
	locationCode: string;
	address: string;
	billingAddress: string;
	phone: string;
	manufacturerCode: string;
	manufacturerName: string;
	manufacturerDistributorCode: string;
	manufacturerDistributorName: string;
	orderDate: string;
	status: string;

	routeCode: string;
	estimatedDeliveryDate: string;
	actualDeliveryDate: string;
	totalQuantity: number;
	originalPrice: number;
	totalAmount: number;
	totalReduction: number;
	btOriginalPrice: number;
	btTotalAmount: number;
	btTotalReduction: number;

	orderLineItems: any[];
	promotionDetails: any[];
	pricingStructureSummaries: any[];

	constructor(dt: any) {
		this.id = dt.id;
		this.code = dt.code;
		this.retailerCode = dt.retailerCode;
		this.retailerName = dt.retailerName;
		this.shopName = dt.shopName;
		this.locationCode = dt.locationCode;
		this.address = dt.address;
		this.billingAddress = dt.billingAddress;
		this.phone = dt.phone;
		this.manufacturerCode = dt.manufacturerCode;
		this.manufacturerName = dt.manufacturerName;
		this.manufacturerDistributorCode = dt.manufacturerDistributorCode;
		this.manufacturerDistributorName = dt.manufacturerDistributorName;
		this.orderDate = dt.orderDate;
		this.status = dt.status.id;

		this.routeCode = dt.routeCode;
		this.estimatedDeliveryDate = dt.estimatedDeliveryDate;
		this.actualDeliveryDate = dt.actualDeliveryDate;
		this.totalQuantity = dt.totalQuantity;
		this.originalPrice = dt.originalPrice;
		this.totalAmount = dt.totalAmount;
		this.totalReduction = dt.totalReduction;
		this.btOriginalPrice = dt.btOriginalPrice;
		this.btTotalAmount = dt.btTotalAmount;
		this.btTotalReduction = dt.btTotalReduction;

		this.orderLineItems = dt.orderLineItems;
		this.promotionDetails = dt.promotionDetails;
		this.pricingStructureSummaries = dt.pricingStructureSummaries;
	}

	public getOrderDateString() {
		const date = _moment.parseZone(this.orderDate).format(FORMAT.DATE_MOMENT);
		return date;
	}
	public getEstimatedDeliveryDateString() {
		const date = _moment.parseZone(this.orderDate).format(FORMAT.DATE_MOMENT);
		return date;
	}
	public getActualDeliveryDateString() {
		const date = _moment.parseZone(this.orderDate).format(FORMAT.DATE_MOMENT);
		return date;
	}
}
