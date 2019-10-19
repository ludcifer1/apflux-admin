import * as _moment from 'moment';
import { FORMAT } from '../constants';

export class Retailer {
	retailerInfo: RetailerInfo;
	retailerDevice: RetailerDevice;
	retailerOrder: RetailerOrder;
	retailerInventory: RetailerInventory;
	retailerContract: RetailerContract;
	retailerSellOut: RetailerSellOut;
	constructor(retailer: Retailer) {
		if (retailer) {
			this.retailerInfo = retailer.retailerInfo;
			this.retailerDevice = retailer.retailerDevice;
			this.retailerOrder = retailer.retailerOrder;
			this.retailerInventory = retailer.retailerInventory;
			this.retailerContract = retailer.retailerContract;
			this.retailerSellOut = retailer.retailerSellOut;
		}
	}
}

export class RetailerInfo {
	userName: string;
	retailerCode: string;
	retailerName: string;
	retailerAddress: string;
	latestOrder: string;
	isActive: boolean;
	isCreatedAccount: boolean;
	shopName: string;
	phone: string;
	nationalIdentity: string;
	birthday: string;
	email: string;
	addressPName: string;
	addressDName: string;
	addressWName: string;
	street: string;
	retailerHN: string;
	fullAddress: string;
	longtitude: string;
	latitude: string;
	businessModel: string;
	businessScope: string;
	urbanRural: string;
	distributionChannelName: string;
	shopType: string;
	shopLocation: string;
	membershipType: string;
	taxCode: string;
	businessLicense: string;
	currentDebt: string;
	DebtLimit: string;
	DebtDayLimit: string;
	bankName: string;
	bankAccount: string;
	swiftCode: string;

	constructor(data: any) {
		if (data) {
			this.userName = data.userName;
			this.retailerCode = data.retailerCode;
			this.retailerName = data.retailerName;
			this.retailerAddress = data.retailerAddress;
			this.latestOrder = data.latestOrder;
			this.isActive = data.isActive;
			this.shopName = data.shopName;
			this.phone = data.phone;
			this.nationalIdentity = data.nationalIdentity;
			this.birthday = data.dayOfBirth;
			this.email = data.email;
			this.fullAddress = data.fullAddress;
			this.addressPName = data.cityName;
			this.addressDName = data.districtName;
			this.addressWName = data.wardName;
			this.street = data.street;
			this.retailerHN = data.houseNum;
			this.longtitude = data.longtitude;
			this.latitude = data.latitude;
			this.businessModel = data.businessModelName;
			this.businessScope = data.businessScopeName;
			this.urbanRural = data.urbanRuralName;
			this.distributionChannelName = data.channelName;
			this.shopType = data.productAssortment;
			this.shopLocation = data.shopLocationName;
			this.membershipType = data.membershipType;
			this.taxCode = data.taxCode;
			this.businessLicense = data.businessLicense;
			this.currentDebt = data.currentDebt;
			this.DebtLimit = data.DebtLimit;
			this.DebtDayLimit = data.DebtDayLimit;
			this.bankName = data.bankName;
			this.bankAccount = data.bankAccount;
			this.swiftCode = data.swiftCode;
			this.isCreatedAccount = data.isCreatedAccount;
		}
	}
}
export class RetailerDevice {
	deviceNumber: string;
	deviceType: string;
	status: string;
	installedDate: string;
	serialNumber: string;
	implementer: string;
	onlineStatus: string;
	constructor(data: RetailerDevice) {
		if (data) {
			this.deviceNumber = data.deviceNumber;
			this.deviceType = data.deviceType;
			this.status = data.status;
			this.installedDate = data.installedDate;
			this.serialNumber = data.serialNumber;
			this.implementer = data.implementer;
			this.onlineStatus = data.onlineStatus;
		}
	}
}

export class RetailerContract {
	contractNumber: string;
	contractName: string;
	effectiveDate: string;
	contractLength: string;
	contractType: string;
	representativeName: string;
	representativeId: string;
	representativeIssueDate: string;
	contractValue: string;
	monthlyPaidAmt: string;
	alreadyPaidAmt: string;
	remainingAmt: string;
	constructor(data: RetailerContract) {
		if (data) {
			this.contractNumber = data.contractNumber;
			this.contractName = data.contractName;
			this.effectiveDate = data.effectiveDate;
			this.representativeName = data.representativeName;
			this.representativeId = data.representativeId;
			this.representativeIssueDate = data.representativeIssueDate;
			this.contractValue = data.contractValue;
			this.contractLength = data.contractLength;
			this.contractType = data.contractType;
			this.monthlyPaidAmt = data.monthlyPaidAmt;
			this.alreadyPaidAmt = data.alreadyPaidAmt;
			this.remainingAmt = data.remainingAmt;
		}
	}
}

export class RetailerContractHistory {
	createdDate: string;
	description: string;
	user: string;
	constructor(data: RetailerContractHistory) {
		if (data) {
			this.createdDate = data.createdDate;
			this.description = data.description;
			this.user = data.user;
		}
	}
}

export class RetaileContractPayment {
	paymentDate: string;
	paidAmt: string;
	paymentType: string;
	order: string;
	author: string;
	constructor(data: RetaileContractPayment) {
		if (data) {
			this.paymentDate = data.paymentDate;
			this.paidAmt = data.paidAmt;
			this.paymentType = data.paymentType;
			this.order = data.order;
			this.author = data.author;
		}
	}
}

export class RetailerOrder {
					id: string;
					code: string;
					retailerCode: string;
					orderDate: string;
					totalAmount: number;
					totalQuantity: number;
					manufacturerName: string;
					distributorName: string;
					estimatedDeliveryDate: string;
					actualDeliveryDate: string;
					status: string;
					constructor(order: any) {
						this.id = order.id;
						this.code = order.code;
						this.retailerCode = order.retailerCode;
						this.orderDate = order.orderDate;
						this.totalAmount = order.totalAmount;
						this.totalQuantity = order.totalQuantity;
						this.manufacturerName = order.manufacturerName;
						this.distributorName = order.manufacturerDistributorName;
						this.estimatedDeliveryDate = order.estimatedDeliveryDate;
						this.actualDeliveryDate = order.actualDeliveryDate;
						this.status = order.status.name;
					}
				}

export class RetailerInventory {
	totalItems: number;
	totalPurcahsingValue: number;
	totalSellingValue: number;
	productItemList: Product[];
	constructor(inv: any) {
		this.totalItems = inv.totalItems;
		this.totalPurcahsingValue = inv.totalPurchasingValue;
		this.totalSellingValue = inv.totalSellingValue;
		this.productItemList = inv.inventories;
	}
}

export class RetailerSellOut {
	purchasedDate: string;
	purchasedDay: string;
	purchasedTime: string;
	shopperName: string;
	totalAmount: number;
	debt: number;
	cutomerPay: number;

	constructor(data: RetailerSellOut) {
		this.purchasedDate = data.purchasedDate;
		this.shopperName = data.shopperName;
		this.purchasedDay = _moment(data.purchasedDate).format(FORMAT.DATE_MOMENT);
		this.purchasedTime = _moment(data.purchasedDate).format(FORMAT.TIME_MOMENT);
		this.debt = data.debt;
		this.totalAmount = data.totalAmount;
		this.cutomerPay = data.totalAmount - data.debt;
	}
}
export interface Product {
	id: number;
	barcode: string;
	productName: string;
	unitName: string;
	quantity: number;
	purchasingPrice: number;
	sellingPrice: number;
}
