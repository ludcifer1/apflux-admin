import { environment } from '@env/environment';

export const FLUX_URL = {
	ALL_STUDENT_URL: 'https://mangahay.net/test/api_for_backend/get/?request=1',
	ALL_COURSE_URL:
		'https://mangahay.net/test/api_for_backend/get/?request=2&index=0',
	ALL_NEWS_URL: 'https://mangahay.net/test/api_for_backend/news/?',
	ALL_SUBJECT_URL: 'https://mangahay.net/test/api_for_backend/subject/',
	ALL_CLASS_URL: 'https://mangahay.net/test/api_for_backend/class/',
	POST_STUDENT_URL: 'https://mangahay.net/test/api_for_backend/insert/',
};

export const API_URL = {
	RETAILER_PROFILES_URL:
		environment.api.ROOT +
		environment.api.OPERATION_ROOT +
		environment.api.RETAILER_PROFILES_ROOT,

	API_RETAILER_INVENTORY_URL:
		environment.api.ROOT +
		environment.api.OPERATION_ROOT +
		'RetailerInventories/',
	API_RETAILER_ORDERS_URL:
		environment.api.ROOT + environment.api.OPERATION_ROOT + 'Orders/',
	PROFILE_CREATION_URL:
		environment.api.ROOT + environment.api.OPERATION_ROOT + 'CreationProfiles/',
	API_RETAILER_SELLOUT_URL: environment.api.ROOT + 'SelloutHistories/',
	// LOCATION
	PROVINCES_URL: environment.api.ROOT + 'provinces',
	DISTRICTS_URL: environment.api.ROOT + 'districts',
	WARDS_URL: environment.api.ROOT + 'wards',
	API_ACCOUNT_URL:
		environment.api.ROOT + environment.api.OPERATION_ROOT + 'Users/',
	API_ACCOUNTTYPE_FILTER_URL:
		environment.api.ROOT +
		environment.api.OPERATION_ROOT +
		'UserTypes/OperationPortal/UserTypes',
	// TREE
	TREEDATA_BY_MANU_URL:
		environment.api.ROOT +
		environment.api.OPERATION_ROOT +
		'Hierarchies/Manufacturers',
	TREEDATA_MANU_URL:
		environment.api.ROOT + environment.api.OPERATION_ROOT + 'Hierarchies/',
	//
	TREEDATA_BY_PH_URL:
		environment.api.ROOT + environment.api.OPERATION_ROOT + 'HierarchiesPH/ph1',
	TREEDATA_PH_URL:
		environment.api.ROOT + environment.api.OPERATION_ROOT + 'HierarchiesPH/',
	PRODUCT_IMAGEDATA_URL:
		environment.api.ROOT + environment.api.OPERATION_ROOT + 'ProductFiles/',
	MANU_IMAGEDATA_URL:
		environment.api.ROOT +
		environment.api.OPERATION_ROOT +
		'ManufacturerImages/',
	BRAND_IMAGEDATA_URL:
		environment.api.ROOT + environment.api.OPERATION_ROOT + 'BrandImages/',
	SALESHUB_IMAGEDATA_URL:
		environment.api.ROOT + environment.api.OPERATION_ROOT + 'PHImages/',
	BANNER_IMAGEDATA_URL:
		environment.api.ROOT + environment.api.OPERATION_ROOT + 'Banners/',

	// OPERATION DISTRIBUTOR
	OPERATION_DISTRIBUTOR_URL:
		environment.api.ROOT +
		environment.api.OPERATION_ROOT +
		'DistributorProfiles/',
	//
	OPERATION_MANUFACTURER_URL:
		environment.api.ROOT +
		environment.api.OPERATION_ROOT +
		'ManufacturerProfiles/',
	OPERATION_MANUFACTURER_FILTER_URL:
		environment.api.ROOT + environment.api.OPERATION_ROOT + 'Manufacturers/',
	OPERATION_SEARCH_ORDER_URL:
		environment.api.ROOT +
		environment.api.OPERATION_ROOT +
		environment.api.ORDERS_ROOT +
		'OrderNumber/',
	OPERATION_ORDER_STATUS_URL:
		environment.api.ROOT +
		environment.api.OPERATION_ROOT +
		environment.api.ORDERS_ROOT +
		'OrderStatus'
};
