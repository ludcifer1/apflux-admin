import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { API_URL } from '@app/shared/constants/api.constant';
import { TreeSetting } from '@app/shared/models/settings.model';
import { TEXT } from '@app/shared/constants';

export class TreeNodeService {
	constructor(private http: HttpClient) {}

	getAllTreeData(setting: TreeSetting) {
		let result: Observable<any>;
		let url = null;
		if (setting.type) {
			switch (setting.type) {
				case TEXT.COMMON.MANUFACTURER:
					url = API_URL.TREEDATA_BY_MANU_URL;
					break;
				case TEXT.COMMON.SALESHUB:
					url = API_URL.TREEDATA_BY_PH_URL;
			}
			result = this.http.get<any>(url).pipe(
				map(res => {
					if (!res) {
						return this.ErrorHandler(res);
					}
					return res.result;
				})
			);
		}
		return result;
	}

	getTreeNodebyParentId(rootId: string, path: string, setting: TreeSetting) {
		let result: Observable<any>;
		let url = null;
		if (setting.type) {
			switch (setting.type) {
				case TEXT.COMMON.MANUFACTURER:
					url = API_URL.TREEDATA_MANU_URL;
					break;
				case TEXT.COMMON.SALESHUB:
					url = API_URL.TREEDATA_PH_URL;
					break;
			}
			result = this.http.get<any>(url + `${rootId}?path=${path}`).pipe(
				map(res => {
					if (!res) {
						return this.ErrorHandler(res);
					}
					return res.result;
				})
			);
		}
		return result;
	}

	getBrandbyParentId(rootId: string, path: string) {
		let result: Observable<any>;
		const url = API_URL.TREEDATA_MANU_URL;
		result = this.http.get<any>(url + `${rootId}/Brands?path=${path}`).pipe(
			map(res => {
				if (!res) {
					return this.ErrorHandler(res);
				}
				return res.result;
			})
		);
		return result;
	}


	private ErrorHandler(err: any) {}
}
