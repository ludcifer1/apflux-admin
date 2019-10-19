import { Spinner } from 'ngx-spinner/lib/ngx-spinner.enum';
import { SweetAlertOptions } from 'sweetalert2';
import { TEXT } from './text.constant';

export const NGXSPINNER: Spinner = {
	bdColor: 'rgba(51,51,51,0.42)',
	size: 'large',
	color: '#fff',
	type: 'ball-scale-multiple',
	fullScreen: true
};
export const NGXSPLASHSPINNER: Spinner = {
	bdColor: 'rgba(51,51,51,0)',
	size: 'large',
	color: '#00acc1',
	type: 'ball-spin-fade-rotating',
	fullScreen: false
};

export const CHANGE_PASSWORD_ALERT_OPTION: SweetAlertOptions = {
	title: 'Thiết lập mật khẩu',
	showCancelButton: true,
	input: 'password',
	inputAttributes: {}
};
