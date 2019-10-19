import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { DeviceState } from './device.state';

@NgModule({
	declarations: [],
	imports: [NgxsModule.forFeature([DeviceState]), CommonModule]
})
export class DeviceStoreModule {}
