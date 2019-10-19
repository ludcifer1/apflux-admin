export const TEXT = {
	MESSAGE: {
		YES: 'Đồng ý',
		CONFIRM: 'Xác nhận',
		CANCEL: 'Hủy',
		CLOSE: 'Đóng',
		ADD_SUCCESS: ' Thêm mới thành công',
		UPDT_SUCCESS: 'Cập nhật thành công',
		CHANGE_SUCCESS: 'Thay đổi thành công',
		CHANGE_FAIL: 'Thay đổi thất bại',
		PASSWORD_CHANGE_SUCCESS: ' Thay đổi mật khẩu thành công',
		PASSWORD_CHANGE_FAIL: ' Thay đổi mật khẩu thất bại',
		PASSWORD_ERR_NOPW: 'Mật khẩu không được để trống',
		PASSWORD_ERR_UNSAFE:
			'Mật khẩu cần phải thỏa mãn: có ít nhất 8 ký tự, có chữ in hoa và thường, có chứa số'
	},

	BUTTON: {
		ORD_PROCESS: 'Xử Lý Đơn Hàng',
		SHIPPER_CHANGE: 'Đổi NVGH',
		NEW_ROUTE: 'Thêm tuyến mới',
		NEW_LOCA_GROUP: 'Thêm nhóm địa điểm',
		DISABLED: 'Vô hiệu hóa'
	},

	COMMON: {
		COM_DESCRIPTION: 'Mô tả',
		MANUFACTURER: 'Manufacturer',
		SALESHUB: 'Saleshub',
		BRANDROOT: 'BrandRoot',
		BRAND: 'Brand',
		BRANDCHILD: 'BrandcChild',
		BANNER: 'Banner',
		PRODUCT: 'Product',
	},

	INPUT: {
		SPN_SELECT_CITY: 'Chọn thành phố',
		SPN_SELECT_DISTRICT: 'Chọn quận',
		SPN_SELECT_WARD: 'Chọn phường xã'
	},
	TOAST: {
		NOTIFICATION: 'Thông báo',
		REG_SUCCESS: 'Tài khoản đã được tạo',
		REG_FAIL: 'Có lỗi xảy ra: ',
		NO_TEXT_ORDER: 'Mã đơn hàng không được trống',
		NO_FILE: 'Không có file nào được chọn',
		THUMBNAIL_IMAGE_SUCCESS: 'Thiết lập Thumbnail thành công',
		DELETE_IMAGE_SUCCESS: 'Xóa ảnh thành công',
		UPLOAD_IMAGE_SUCCESS: 'Tải ảnh lên thành công'
	},
	ACCOUNT_TYPE: {
		MANUFACTURER: 'manufacturer',
		DISTRIBUTOR: 'distributor',
		RETAILER: 'retailer'
	}
};

export const SHIPPINGROUTE = {
	ROUTE_LIST_ERR:
		'Vui lòng tạo tuyến giao hàng cho tất cả cả phường thuộc khu vực phân phối của bạn',
	ROUTE_HEAD_TITTLE: 'Thông tin tuyến',
	ROUTE_CODE: 'Mã tuyến',
	ROUTE_NAME: 'Tên tuyến',
	ROUTE_NAME_ERR: 'Hãy nhập tên tuyến',
	ROUTE_START_DATE: 'Ngày bắt đầu',
	ROUTE_SHIPPING_DATE: 'Ngày giao hàng',
	ROUTE_SHIPPING_DATE_ERR: 'Hãy lựa chọn ngày giao hàng',
	ROUTE_SHIPPING_METHOD: 'Phương thức giao hàng',
	ROUTE_SHIPPING_METHOD_ERR: 'Hãy lựa chọn phương thức giao hàng',
	ROUTE_SHIPPING_WEEK: 'Tuần giao hàng',
	ROUTE_SHIPPING_WEEK_ERR: 'Hãy lựa chọn tuần giao hàng',
	ROUTE_SHIPPING_GROUP_LIST: 'Danh sách địa điểm',
	ROUTE_SHIPPING_GROUP_LIST_ERR: 'Thêm ít nhất một khu vực cho tuyến',
	ROUTE_SHIPPING_GROUP_ITEM_ERR: 'Hãy lựa chọn địa điểm',
	ROUTE_SHIPPING_GROUP_ADD: 'Thêm nhóm địa điểm'
};
export const STATUSSTRING = {
	SUBMITTED: 'Đã nhận đơn',
	STKCONFIRM: 'Đã xác nhận kho',
	VALNSHIP: 'Kiểm tra và vận chuyển',
	CANCELLED: 'Đã hủy',
	COMPLETED: 'Đã hoàn thành',
	REQUESTRETURN: 'Yêu cầu hoàn trả',
	RETURNED: 'Đã trả đơn',
	NOSTOCK: 'Hết hàng',
	NOPROMO: 'Hết khuyến mãi'
};
export const ERROR = {
	ERR_404: 'Không tìm thấy',
	ERR_400: 'Dữ liệu gửi đi không đúng',
	ERR_500: 'Lỗi Server',
	ERR_UNKNOW: 'Lỗi không xác định',
	ERR_RETRY: 'Vui lòng thử lại sau'
};
