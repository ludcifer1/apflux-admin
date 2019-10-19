import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { API_URL } from '@app/shared/constants/api.constant';
import { ImageUploadSetting } from '@app/shared/models/settings.model';
import { TEXT } from '@app/shared/constants';

export class ImageUploadService {
	constructor(private http: HttpClient) { }

	getImageWithPath(path: string, setting: ImageUploadSetting) {
		if (path) {
			path = path.substring(1);
		}
		let result: Observable<any>;
		let url = null;

		if (setting && setting.type) {
			const type = setting.type;
			switch (type) {
				case TEXT.COMMON.SALESHUB:
					url = API_URL.SALESHUB_IMAGEDATA_URL;
					break;
				case TEXT.COMMON.MANUFACTURER:
					url = API_URL.MANU_IMAGEDATA_URL;
					break;
				case TEXT.COMMON.PRODUCT:
					url = API_URL.PRODUCT_IMAGEDATA_URL;
					break;
				case TEXT.COMMON.BRAND:
					url = API_URL.BRAND_IMAGEDATA_URL;
					break;
				case TEXT.COMMON.BANNER:
					url = API_URL.BANNER_IMAGEDATA_URL;
					break;
			}
			result = this.http.get<any>(url + '?path=' + path);
		}
		return result;
	}

	uploadImage(path: string, file: File, setting: ImageUploadSetting) {
		path = path.substring(1);
		let result: Observable<any>;
		let url = null;
		const formData: FormData = new FormData();
		if (file) {
			formData.append(file.name, file);
			formData.append('path', path);
		}
		if (setting && setting.type) {
			const type = setting.type;
			switch (type) {
				case TEXT.COMMON.SALESHUB:
					url = API_URL.SALESHUB_IMAGEDATA_URL;
					break;
				case TEXT.COMMON.MANUFACTURER:
					url = API_URL.MANU_IMAGEDATA_URL;
					break;
				case TEXT.COMMON.PRODUCT:
					url = API_URL.PRODUCT_IMAGEDATA_URL;
					break;
				case TEXT.COMMON.BRAND:
					url = API_URL.BRAND_IMAGEDATA_URL;
					break;
				case TEXT.COMMON.BANNER:
					url = API_URL.BANNER_IMAGEDATA_URL;
					break;
			}
			result = this.http.post<any>(url, formData);
		}
		return result;
	}

	deleteImage(file: File | any) {
		const fileName = file.fileName;
		let result: Observable<any>;
		const url = API_URL.MANU_IMAGEDATA_URL + `?fileName=${fileName}`;
		result = this.http.delete<any>(url);
		return result;
	}

	setThumbnail(file: File | any) {
		const fileName = file.fileName;
		let result: Observable<any>;
		const url =
			API_URL.PRODUCT_IMAGEDATA_URL + `SetThumbnail?fileName=${fileName}`;

		result = this.http.post<any>(url, file);
		return result;
	}
}
