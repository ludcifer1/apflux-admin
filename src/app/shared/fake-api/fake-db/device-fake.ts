export class DeviceFake {
	public static devices = [
		{
			deviceId: 'POS001',
			deviceType: 'POS',
			deviceStatus: 0,
			deviceLocation: 'District 13',
			deviceOwner: 'Mr Unknown',
			deviceHistory: [
				{
					dateTime: '2019-02-19T11:14:19.08',
					description: 'Đổi tình trạng thiết bị DVC1 sang Đang Sử Dụng',
					note: 'Status Update',
					user: 'Operator01'
				},
				{
					dateTime: '2019-02-19T11:14:19.08',
					description: 'Chuyển sở hữu cho tạp hóa XXX-YYY',
					note: 'Device Owner Changed',
					user: 'Operator01'
				},
				{
					dateTime: '2019-02-19T11:14:19.08',
					description: 'Vô hiệu hóa tạm thời thiết bị DVC1',
					note: 'Status Update',
					user: 'Operator01'
				},
				{
					dateTime: '2019-02-19T11:14:19.08',
					description: 'Đổi tình trạng thiết bị DVC1 sang Đang Sử Dụng',
					note: 'Status Update',
					user: 'Operator01'
				}
			]
		},
		{
			deviceId: 'POS002',
			deviceType: 'POS',
			deviceStatus: 0,
			deviceLocation: `Saiyan's Planet`,
			deviceOwner: 'Mr Vegetable',
			deviceHistory: [
				{
					dateTime: '2019-02-19T11:14:19.08',
					description: 'Đổi tình trạng thiết bị DVC1 sang Đang Sử Dụng',
					note: 'Status Update',
					user: 'Operator01'
				},
				{
					dateTime: '2019-02-19T11:14:19.08',
					description: 'Chuyển sở hữu cho tạp hóa XXX-YYY',
					note: 'Device Owner Changed',
					user: 'Operator01'
				}
			]
		},
		{
			deviceId: 'POS003',
			deviceType: 'POS',
			deviceStatus: 0,
			deviceLocation: 'District 1',
			deviceOwner: 'Mr Panthars',
			deviceHistory: [
				{
					dateTime: '2019-02-19T11:14:19.08',
					description: 'Đổi tình trạng thiết bị DVC1 sang Đang Sử Dụng',
					note: 'Status Update',
					user: 'Operator01'
				},
				{
					dateTime: '2019-02-19T11:14:19.08',
					description: 'Chuyển sở hữu cho tạp hóa XXX-YYY',
					note: 'Device Owner Changed',
					user: 'Operator01',
					deviceHistory: [
						{
							dateTime: '2019-02-19T11:14:19.08',
							description: 'Đổi tình trạng thiết bị DVC1 sang Đang Sử Dụng',
							note: 'Status Update',
							user: 'Operator01'
						},
						{
							dateTime: '2019-02-19T11:14:19.08',
							description: 'Chuyển sở hữu cho tạp hóa XXX-YYY',
							note: 'Device Owner Changed',
							user: 'Operator01',
							deviceHistory: [
								{
									dateTime: '2019-02-19T11:14:19.08',
									description: 'Đổi tình trạng thiết bị DVC1 sang Đang Sử Dụng',
									note: 'Status Update',
									user: 'Operator01'
								},
								{
									dateTime: '2019-02-19T11:14:19.08',
									description: 'Chuyển sở hữu cho tạp hóa XXX-YYY',
									note: 'Device Owner Changed',
									user: 'Operator01'
								}
							]
						}
					]
				}
			]
		},
		{
			deviceId: 'POS004',
			deviceType: 'POS',
			deviceStatus: 0,
			deviceLocation: 'District 2',
			deviceOwner: 'Mr V',
			deviceHistory: [
				{
					dateTime: '2019-02-19T11:14:19.08',
					description: 'Đổi tình trạng thiết bị DVC1 sang Đang Sử Dụng',
					note: 'Status Update',
					user: 'Operator01'
				},
				{
					dateTime: '2019-02-19T11:14:19.08',
					description: 'Chuyển sở hữu cho tạp hóa XXX-YYY',
					note: 'Device Owner Changed',
					user: 'Operator01'
				}
			]
		}
	];
	public static deviceHistory = [
		{
			dateTime: '2019-02-19T11:14:19.08',
			description: 'Đổi tình trạng thiết bị DVC1 sang Đang Sử Dụng',
			note: 'Status Update',
			user: 'Operator01'
		},
		{
			dateTime: '2019-02-19T11:14:19.08',
			description: 'Chuyển sở hữu cho tạp hóa XXX-YYY',
			note: 'Device Owner Changed',
			user: 'Operator01'
		}
	];
}
