import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { NoFoundComponent } from './no-found/no-found.component';

const appRoutes: Routes = [
	{
		path: '',
		redirectTo: '/',
		pathMatch: 'full'
	},
	{
		path: 'comic',
		loadChildren: '../feetModules/characters/characters.module#CharactersModule'
	},
	{
		path: 'no-found',
		component: NoFoundComponent,
		data: { message: 'Message From Route Data -- Page not found.' }
	},
	{
		path: '**',
		redirectTo: '/no-found'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(appRoutes, {
		useHash: true,
		preloadingStrategy: PreloadAllModules
	})],
	exports: [RouterModule]
})

export class AppRoutingModule { }
