import { Injectable } from '@angular/core';
import { ERROR } from '../constants/text.constant';

export class CustomizedError {
	errCode: string;
	errText: string;
	errMessage: string;
	errUrl: string;
	constructor(err: any) {
		this.errCode = err.status;
		this.errText = err.statusText;
		this.errMessage = err.message;
		this.errUrl = err.url;
	}
}
@Injectable()
export class ErrorHandlerService {
	error: CustomizedError;

	constructor() {}

	getTranslatedError(errCode: number): String {
		return this.resolveError(errCode);
	}

	private resolveError(errCode: string | number): String {
		switch (errCode) {
			case 400:
				return ERROR.ERR_400;
			case 404:
				return ERROR.ERR_404;
			case 500:
				return ERROR.ERR_500;
			default:
				return ERROR.ERR_UNKNOW;
		}
	}
}
