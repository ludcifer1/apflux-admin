export class LoadDeviceDetail {
	static readonly type = '[DEVICES ===> DETAIL] Load Device Detail';
	constructor() {}
}
export class LoadDeviceDetailSuccess {
	static readonly type = '[DEVICES ===> DETAIL] Load Device Detail Success';
	constructor(public readonly payload: any) {}
}
export class LoadDeviceDetailFail {
	static readonly type = '[DEVICES ===> DETAIL] Load Device Detail Fail';
	constructor(public readonly error: any) {}
}
