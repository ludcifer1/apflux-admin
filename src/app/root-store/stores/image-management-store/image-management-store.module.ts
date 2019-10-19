import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { TreeNodeState } from './tree.state';

@NgModule({
	declarations: [],
	imports: [NgxsModule.forFeature([TreeNodeState]), CommonModule]
})
export class ImageManagementStoreModule {}
