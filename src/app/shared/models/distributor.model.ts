import * as _moment from 'moment';
import { FORMAT } from '../constants';
export class DistributorModel {
	userName: string;
	manufacturerDistributorName: string;
	manufacturerDistributorCode: string;
	fullAddress: string;
	manufacturerName: string;
	manufacturerCode: string;

	latitude: string;
	longtitude: string;
	phone: string;
	fax: string;
	soldTo: string;
	shipTo: string;
	addressPName: string;
	addressPCode: string;
	addressDName: string;
	addressDCode: string;
	addressWName: string;
	addressWCode: string;
	street: string;
	homeNumber: string;
	establishedDate: string;
	businessLicense: string;
	isCreatedAccount: boolean;
	isActive: boolean;
	taxCode: string;
	representative: string;
	representativeIdCard: string;

	constructor(dt: any) {
		this.userName = dt.userName;
		this.manufacturerDistributorName = dt.manufacturerDistributorName;
		this.manufacturerDistributorCode = dt.manufacturerDistributorCode;
		this.fullAddress = dt.fullAddress;
		this.manufacturerName = dt.manufacturerName;
		this.manufacturerCode = dt.manufacturerCode;
		this.latitude = dt.latitude;
		this.longtitude = dt.longtitude;
		this.phone = dt.phone;
		this.fax = dt.fax;
		this.soldTo = dt.soldTo;
		this.shipTo = dt.shipTo;
		this.addressPCode = dt.cityCode;
		this.addressPName = dt.cityName;
		this.addressDCode = dt.districtCode;
		this.addressDName = dt.districtName;
		this.addressWCode = dt.wardCode;
		this.addressWName = dt.wardName;
		this.street = dt.street;
		this.homeNumber = dt.houseNum;
		this.establishedDate = dt.dateOfEstablish;
		this.isCreatedAccount = dt.isCreatedAccount;
		this.isActive = dt.isActive;
		this.representative = dt.representative;
		this.representativeIdCard = dt.identityCard;
		this.taxCode = dt.taxCode;
		this.businessLicense = dt.businessLicense;
	}

	public getEstablishedDateString() {
		const date = _moment
			.parseZone(this.establishedDate)
			.format(FORMAT.DATE_MOMENT);
		return date;
	}
}
