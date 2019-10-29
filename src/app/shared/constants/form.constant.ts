import { Validators } from '@angular/forms';

export const FORM = {
	STUDENT_FORM: {
		username: [null, Validators.required],
		password: [null, Validators.required],
		name: [null, Validators.required],
		email: [null, Validators.required],
		phone: [null, Validators.required],
		address: [null, Validators.required],
		avatar: [null, Validators.required],
		identification: [null, Validators.required],
		student_id: [null, Validators.required],
		birthday: [null, Validators.required],
		gender: [null, Validators.required],
		major: [null, Validators.required],
		specialize: [null, Validators.required],
		course: [null, Validators.required],
		status: [null, Validators.required],
		start_date: [null, Validators.required],
		delete_status: [null, Validators.required]
	},
	GRADE_FORM: {
		lab1: null,
		lab2: null,
		lab3: null,
		test1: null,
		test2: null,
	},



























	GENERAL_FORM: {
		userName: { value: null, disabled: true },
		retailerName: { value: null, disabled: true },
		shopName: { value: null, disabled: true },
		phone: { value: null, disabled: true },
		nationalIdentity: { value: null, disabled: true },
		birthday: { value: null, disabled: true },
		email: { value: null, disabled: true },
		addressPName: { value: null, disabled: true },
		addressDName: { value: null, disabled: true },
		addressWName: { value: null, disabled: true },
		street: { value: null, disabled: true },
		retailerHN: { value: null, disabled: true },
		longtitude: { value: null, disabled: true },
		latitude: { value: null, disabled: true },
		businessModel: { value: null, disabled: true },
		businessScope: { value: null, disabled: true },
		urbanRural: { value: null, disabled: true },
		distributionChannelName: { value: null, disabled: true },
		shopType: { value: null, disabled: true },
		shopLocation: { value: null, disabled: true },
		membershipType: { value: null, disabled: true },
		taxCode: { value: null, disabled: true },
		businessLicense: { value: null, disabled: true },
		currentDebt: { value: null, disabled: true },
		DebtLimit: { value: null, disabled: true },
		DebtDayLimit: { value: null, disabled: true },
		bankName: { value: null, disabled: true },
		bankAccount: { value: null, disabled: true },
		swiftCode: { value: null, disabled: true },
		isActive: { value: null },
		isB2CActive: { value: null }
	},
	DEVICE_FORM: {
		deviceId: { value: null, disabled: true },
		deviceType: { value: null, disabled: true },
		deviceDate: { value: null, disabled: true },
		serialNumber: { value: null, disabled: true },
		deviceManager: { value: null, disabled: true },
		deviceOwner: { value: null, disabled: true },
		deviceLocation: { value: null, disabled: true },
		deviceStatus: { value: null, disabled: true },
		deviceOnlineStatus: { value: null, disabled: true }
	},
	CONTRACT_FORM: {
		contractNumber: { value: null, disabled: true },
		contractLength: { value: null, disabled: true },
		startDate: { value: null, disabled: true },
		contractType: { value: null, disabled: true },
		representative: { value: null, disabled: true },
		nationalIdentity: { value: null, disabled: true },
		nationalIdentityCreateDate: { value: null, disabled: true },
		contractValue: { value: null, disabled: true },
		monthlyPayment: { value: null, disabled: true },
		remainingPayment: { value: null, disabled: true },
		paid: { value: null, disabled: true }
	},
	MANUFACTURER_INFO_FORM: {
		userName: { value: null, disabled: true },
		manuName: { value: null, disabled: true },
		joinedDate: { value: null, disabled: true },
		phone: { value: null, disabled: true },
		fax: { value: null, disabled: true },
		addressPName: { value: null, disabled: true },
		addressDName: { value: null, disabled: true },
		addressWName: { value: null, disabled: true },
		homeNumber: { value: null, disabled: true },
		street: { value: null, disabled: true },
		longtitude: { value: null, disabled: true },
		latitude: { value: null, disabled: true },
		establishedDate: { value: null, disabled: true },
		businessLicense: { value: null, disabled: true },
		taxCode: { value: null, disabled: true },
		isB2CActive: { value: null }
	},
	DISTRIBUTOR_INFO_FORM: {
		userName: { value: null, disabled: true },
		manufacturerName: { value: null, disabled: true },
		manufacturerDistributorName: { value: null, disabled: true },
		manufacturerDistributorCode: { value: null, disabled: true },
		soldTo: { value: null, disabled: true },
		shipTo: { value: null, disabled: true },
		phone: { value: null, disabled: true },
		fax: { value: null, disabled: true },
		addressPName: { value: null, disabled: true },
		addressDName: { value: null, disabled: true },
		addressWName: { value: null, disabled: true },
		homeNumber: { value: null, disabled: true },
		street: { value: null, disabled: true },
		longtitude: { value: null, disabled: true },
		latitude: { value: null, disabled: true },
		establishedDate: { value: null, disabled: true },
		businessLicense: { value: null, disabled: true },
		taxCode: { value: null, disabled: true },
		representative: { value: null, disabled: true },
		representativeIdCard: { value: null, disabled: true },
		isB2CActive: { value: null }
	}
};
