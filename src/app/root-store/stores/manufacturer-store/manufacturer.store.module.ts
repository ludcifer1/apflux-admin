import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { ManufacturerState } from './manufacturer.state';

@NgModule({
	declarations: [],
	imports: [NgxsModule.forFeature([ManufacturerState]), CommonModule]
})
export class ManufacturerStoreModule {}
