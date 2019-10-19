export class Implementer {
	userName: string;
	implementerName: string;
	fullAddress: string;
	managerName: string;

	constructor(imp: any) {
		this.userName = imp.userName;
		this.implementerName = imp.implementerName;
		this.fullAddress = imp.fullAddress;
		this.managerName = imp.managerName;
	}
}
