import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoFoundComponent } from './no-found/no-found.component';

const noFoundRoute: Routes = [
  {
		path: 'not-found',
		component: NoFoundComponent,
		data: { message: 'Message From Route Data -- Page not found.' }
	},
	{
		path: '**',
		redirectTo: '/not-found'
	}
]

@NgModule({
  imports: [RouterModule.forChild(noFoundRoute)],
  exports: [RouterModule]
})

export class NoFoundRoutingModule { }
