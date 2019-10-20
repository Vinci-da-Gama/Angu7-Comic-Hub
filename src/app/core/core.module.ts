import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';
import { AppHeadComponent } from './app-head/app-head.component';

@NgModule({
	declarations: [AppHeadComponent],
	imports: [
		CommonModule,
		AppRoutingModule
	],
	exports: [
		AppRoutingModule,
		AppHeadComponent
	]
})
export class CoreModule { }
