import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoFoundRoutingModule } from './no-found.routing.module';
import { NoFoundComponent } from './no-found/no-found.component';

@NgModule({
	imports: [
		CommonModule,
		NoFoundRoutingModule
	],
	declarations: [NoFoundComponent]
})

export class NoFoundModule { }
