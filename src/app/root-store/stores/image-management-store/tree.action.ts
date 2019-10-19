export class SetTreeNode {
	static readonly type = '[IMAGE MANAGEMENT] Set Tree to State';
	constructor(public payload: any) {}
}
export class SetTreeNodeSuccess {
	static readonly type = '[IMAGE MANAGEMENT] Set Tree to State SUCCESS';
	constructor(public payload: any) {}
}
export class SetTreeNodeFail {
	static readonly type = '[IMAGE MANAGEMENT] Set Tree to State FAIL';
	constructor(public payload: any) {}
}
export class SetManuSelectedNode {
	static readonly type = '[IMAGE MANAGEMENT] Set Manu Selected Node';
	constructor(public payload: any) {}
}
export class SetSaleshubSelectedNode {
	static readonly type = '[IMAGE MANAGEMENT] Set Saleshub Selected Node';
	constructor(public payload: any) {}
}
export class ClearTreeNode {
	static readonly type = '[IMAGE MANAGEMENT] Clear Tree from State';
	constructor() {}
}
export class CachedChildren {
	static readonly type = '[IMAGE MANAGEMENT] Cache Children';
	constructor(public payload: string[]) {}
}
