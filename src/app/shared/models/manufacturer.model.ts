import * as _moment from 'moment';
import { FORMAT } from '../constants';

export class ManufacturerModel {
	userName: string;
	manufacturerCode: string;
	manuName: string;
	fullAddress: string;
	//
	isCreatedAccount: boolean;
	joinedDate: string;
	phone: string;
	fax: string;
	homeNumber: string;
	street: string;
	addressWCode: string;
	addressWName: string;
	addressDName: string;
	addressDCode: string;
	addressPCode: string;
	addressPName: string;
	latitude: string;
	longtitude: string;
	establishedDate: string;
	taxCode: string;
	isActive: string;
	businessLicense: string;
	userId: string;

	constructor(manu: any) {
		this.userName = manu.userName;
		this.manufacturerCode = manu.manufacturerCode;
		this.manuName = manu.manufacturerName;
		this.fullAddress = manu.fullAddress;
		this.isCreatedAccount = manu.isCreatedAccount;
		this.joinedDate = manu.joinedDate;
		this.phone = manu.phone;
		this.fax = manu.fax;
		this.homeNumber = manu.houseNum;
		this.street = manu.street;
		this.addressWCode = manu.wardCode;
		this.addressWName = manu.wardName;
		this.addressDCode = manu.districtCode;
		this.addressDName = manu.districtName;
		this.addressPCode = manu.cityCode;
		this.addressPName = manu.cityName;
		this.latitude = manu.latitude;
		this.longtitude = manu.longtitude;
		this.establishedDate = manu.dateOfEstablish;
		this.taxCode = manu.taxCode;
		this.isActive = manu.isActive;
		this.businessLicense = manu.businessLicense;
		this.userId = manu.userId;
	}
	public getJoinedDateString() {
		const date = _moment.parseZone(this.joinedDate).format(FORMAT.DATE_MOMENT);
		return date;
	}
	public getEstablishedDateString() {
		const date = _moment
			.parseZone(this.establishedDate)
			.format(FORMAT.DATE_MOMENT);
		return date;
	}
}
