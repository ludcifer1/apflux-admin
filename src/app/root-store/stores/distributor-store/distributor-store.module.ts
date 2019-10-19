import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { DistributorState } from './distributor.state';

@NgModule({
	declarations: [],
	imports: [NgxsModule.forFeature([DistributorState]), CommonModule]
})
export class DistributorStoreModule { }
