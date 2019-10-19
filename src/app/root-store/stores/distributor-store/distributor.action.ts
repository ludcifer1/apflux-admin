export class LoadDistributorDetail {
	static readonly type =
		'[DISTRIBUTORS==>GENERAL INFO] Load Distributor General Info';
	constructor() {}
}
export class LoadDistributorDetailSuccess {
	static readonly type =
		'[DISTRIBUTORS==>GENERAL INFO] Load Distributor General Info Success';
	constructor(public readonly payload: any) {}
}
export class LoadDistributorDetailFail {
					static readonly type =
						'[DISTRIBUTORS==>GENERAL INFO] Load Distributor General Info Fail';
					constructor(public readonly error: any) {}
				}
export class LoadDistributorB2CDetail {
	static readonly type =
		'[DISTRIBUTORS===>B2C] Load Distributor B2C Account Info';
	constructor() {}
}
export class LoadDistributorB2CDetailSuccess {
	static readonly type =
		'[DISTRIBUTORS===>B2C] Load Distributor B2C Account Info Success';
	constructor(public readonly payload: any) {}
}
export class LoadDistributorB2CDetailFail {
	static readonly type =
		'[DISTRIBUTORS===>B2C] Load Distributor B2C Account Info Fail';
	constructor(public readonly error: any) {}
}
