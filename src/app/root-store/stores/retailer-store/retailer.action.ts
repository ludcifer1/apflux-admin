// ================================================
// =             GENERAL INFORMATION              =
// ================================================

export class LoadRetailer {
	static readonly type = '[RETAILER] Load Retailers';
	constructor(public readonly payload: any[]) {}
}
export class LoadRetailerSuccess {
	static readonly type = '[RETAILER] Load Retailers Success';
	constructor(public readonly payload: any[]) {}
}
export class LoadRetailerFail {
	static readonly type = '[RETAILER] Load Retailers Fail';
	constructor(public readonly payload?: any) {}
}

export class LoadRetailerInfoDetail {
	static readonly type =
		'[RETAILERS==>GENERAL INFO] Load Retailers General Info';
	constructor() {}
}
export class LoadRetailerInfoDetailSuccess {
	static readonly type =
		'[RETAILERS==>GENERAL INFO] Load Retailers General Info Success';
	constructor(public readonly payload: any) {}
}
export class LoadRetailerInfoDetailFail {
	static readonly type =
		'[RETAILERS==>GENERAL INFO] Load Retailers General Info Fail';
	constructor(public readonly error: any) {}
}
export class LoadRetailerB2CDetail {
	static readonly type = '[RETAILER===>B2C] Load Retailer B2C Account Info';
	constructor() {}
}
export class LoadRetailerB2CDetailSuccess {
	static readonly type =
		'[RETAILER===>B2C] Load Retailer B2C Account Info Success';
	constructor(public readonly payload: any) {}
}
export class LoadStudentScores {
	static readonly type =
		'[RETAILER===>B2C] Load Student Scores';
	constructor(public readonly payload: any) {}
}
export class LoadStudentTimetable {
	static readonly type =
		'[RETAILER===>B2C] Load StudentTimetable';
	constructor(public readonly payload: any) {}
}

export class LoadRetailerB2CDetailFail {
	static readonly type =
		'[RETAILER===>B2C] Load Retailer B2C Account Info Fail';
	constructor(public readonly payload: any) {}
}

export class ResetSelectedRetailer {
	static readonly type = '[UTILS] Reset current slide of retailer state';
	constructor() {}
}
// ================================================
// =                   DEVICES                    =
// ================================================

export class LoadDevice {
	static readonly type = '[RETAILER DEVICE] Load Devices';
	constructor(public readonly payload: any[]) {}
}
export class LoadDeviceSuccess {
	static readonly type = '[RETAILER DEVICE] Load Devices Success';
	constructor(public readonly payload: any[]) {}
}
export class LoadDeviceFail {
	static readonly type = '[RETAILER DEVICE] Load Devices Fail';
	constructor(public readonly payload?: any) {}
}
// ================================================
// =                 INVENTORY                    =
// ================================================
export class LoadInventory {
	static readonly type = '[RETAILER INVENTORY] Load Inventory';
	constructor() {}
}
export class LoadInventorySuccess {
	static readonly type = '[RETAILER INVENTORY] Load Inventory Success';
	constructor(public readonly payload: any) {}
}
export class LoadInventoryFail {
	static readonly type = '[RETAILER INVENTORY] Load Inventory Fail';
	constructor(public readonly error: any) {}
}
// ================================================
// =                 ORDERS                    =
// ================================================
export class LoadOrders {
	static readonly type = '[RETAILER ORDERS] Load Orders';
	constructor() {}
}
export class LoadOrdersSuccess {
	static readonly type = '[RETAILER ORDERS] Load Orders Success';
	constructor(public readonly payload: any) {}
}
export class LoadOrdersFail {
	static readonly type = '[RETAILER ORDERS] Load Orders Fail';
	constructor(public readonly error: any) {}
}

// ================================================
// =                   DEVICES                    =
// ================================================

export class LoadContract {
	static readonly type = '[RETAILER CONTRACT] Load Contract';
	constructor(public readonly payload: any[]) {}
}
export class LoadContractSuccess {
	static readonly type = '[RETAILER CONTRACT] Load Contract Success';
	constructor(public readonly payload: any[]) {}
}
export class LoadContractFail {
	static readonly type = '[RETAILER CONTRACT] Load Contract Fail';
	constructor(public readonly payload?: any) {}
}

// ================================================
// =                                              =
// ================================================
export class ResetState {
	static readonly type = '[UTILS] Reset current slide of state';
	constructor() {}
}
