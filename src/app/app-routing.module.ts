import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [{
	path: '',
	redirectTo: '/',
	pathMatch: 'full',
	// loadChildren: '../featCompos/sth...'
}];

@NgModule({
	imports: [RouterModule.forRoot(routes, {
		useHash: true,
		preloadingStrategy: PreloadAllModules
	})],
	exports: [RouterModule]
})

export class AppRoutingModule { }
