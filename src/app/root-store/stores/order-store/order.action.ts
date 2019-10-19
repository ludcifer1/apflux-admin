export class LoadOrderDetail {
	static readonly type =
		'[SEARCH ORDER] Load Order Info';
	constructor() {}
}
export class LoadOrderDetailSuccess {
	static readonly type =
		'[SEARCH ORDER] Load Order Info Success';
	constructor(public readonly payload: any) {}
}

export class LoadOrderDetailFail {
	static readonly type =
		'[SEARCH ORDER] Load Order Info Fail';
	constructor(public readonly error: any) {}
}
