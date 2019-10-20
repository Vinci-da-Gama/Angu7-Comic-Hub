import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeCompo } from './home-compo/home-compo.component';

const homeRoute: Routes = [
	{ path: '', component: HomeCompo }
]

@NgModule({
	imports: [RouterModule.forChild(homeRoute)],
	exports: [
		RouterModule
	]
})

export class HomeRoutingModule { }
