import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { OrderState } from './order.state';

@NgModule({
	declarations: [],
	imports: [NgxsModule.forFeature([OrderState]), CommonModule]
})
export class OrderStoreModule { }
