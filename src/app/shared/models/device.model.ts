export class DeviceModel {
	deviceId: string;
	deviceType: string;
	deviceDate: string;
	serialNumber: string;
	deviceManager: string;
	deviceOwner: string;
	deviceLocation: string;
	deviceStatus: string;
	deviceOnlineStatus: string;
	deviceHistory: any[];

	constructor(device: any){
		this.deviceId = device.deviceId;
		this.deviceType = device.deviceType;
		this.deviceDate = device.deviceDate;
		this.serialNumber = device.serialNumber;
		this.deviceManager = device.deviceManager;
		this.deviceOwner = device.deviceOwner;
		this.deviceLocation = device.deviceLocation;
		this.deviceStatus = device.deviceStatus;
		this.deviceOnlineStatus = device.deviceOnlineStatus;
		this.deviceHistory = device.deviceHistory;
	}
}
