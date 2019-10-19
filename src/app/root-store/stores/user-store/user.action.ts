export class SetUser {
	static readonly type = '[USER] Set User to State';
	constructor(public payload: any) {}
}
export class ClearUser {
	static readonly type = '[USER] Clean User from State';
	constructor() {}
}

