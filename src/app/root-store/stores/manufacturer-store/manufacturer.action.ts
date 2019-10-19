export class LoadManufacturerDetail {
	static readonly type =
		'[MANUFACTURERS==>GENERAL INFO] Load Manufacturer General Info';
	constructor() {}
}
export class LoadManufacturerDetailSuccess {
	static readonly type =
		'[MANUFACTURERS==>GENERAL INFO] Load Manufacturer General Info Success';
	constructor(public readonly payload: any) {}
}
export class LoadManufacturerDetailFail {
	static readonly type =
		'[MANUFACTURERS==>GENERAL INFO] Load Manufacturer General Info Success';
	constructor(public readonly error: any) {}
}
export class LoadManufacturerB2CDetail {
	static readonly type =
		'[MANUFACTURERS===>B2C] Load Manufacturer B2C Account Info';
	constructor() {}
}
export class LoadManufacturerB2CDetailSuccess {
	static readonly type =
		'[MANUFACTURERS===>B2C] Load Manufacturer B2C Account Info Success';
	constructor(public readonly payload: any) {}
}
export class LoadManufacturerB2CDetailFail {
	static readonly type =
		'[MANUFACTURERS===>B2C] Load Manufacturer B2C Account Info Fail';
	constructor(public readonly error: any) {}
}
