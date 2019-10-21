import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComicDetailsLayoutComponent } from './comic-details-layout/comic-details-layout.component';
import { CharacterWithFormComponent } from '../../featCompos/character-with-form/character-with-form.component';

const characterRoute: Routes = [
	{
		path: '', component: ComicDetailsLayoutComponent, children: [
			{ path: ':id', component: CharacterWithFormComponent }
		]
	}
]

@NgModule({
	imports: [RouterModule.forChild(characterRoute)],
	exports: [
		RouterModule
	]
})
export class CharacterRoutingModule { }