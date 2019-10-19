import { asideMenu } from '@app/shared/constants/menu.constant';

export class MenuConfig {
	public defaults: any = {
		header: {
			self: {},
			items: [
				// {
				// 	title: 'Dashboards',
				// 	root: true,
				// 	alignment: 'left',
				// 	page: 'dashboard',
				// 	translate: 'MENU.DASHBOARD',
				// },
				// {
				// 	title: 'Applications',
				// 	root: true,
				// 	alignment: 'left',
				// 	toggle: 'click',
				// 	submenu: [
				// 		{
				// 			title: 'eCommerce',
				// 			bullet: 'dot',
				// 			icon: 'flaticon-business',
				// 			permission: 'accessToECommerceModule',
				// 			submenu: [
				// 				{
				// 					title: 'Customers',
				// 					page: 'ecommerce/customers'
				// 				},
				// 				{
				// 					title: 'Products',
				// 					page: 'ecommerce/products'
				// 				},
				// 			]
				// 		},
				// 		{
				// 			title: 'User Management',
				// 			bullet: 'dot',
				// 			icon: 'flaticon-user',
				// 			submenu: [
				// 				{
				// 					title: 'Users',
				// 					page: 'user-management/users'
				// 				},
				// 				{
				// 					title: 'Roles',
				// 					page: 'user-management/roles'
				// 				}
				// 			]
				// 		},
				// 	]
				// },
			]
		},
		aside: {
			self: {},
			items: asideMenu
		}
	};

	public get configs(): any {
		return this.defaults;
	}
}
