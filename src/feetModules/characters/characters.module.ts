import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './characters-routing.module';
import { ComicDetailsLayoutComponent } from './comic-details-layout/comic-details-layout.component';
import { CharacterWithFormComponent } from '../../featCompos/character-with-form/character-with-form.component';

@NgModule({
	declarations: [
		ComicDetailsLayoutComponent,
		CharacterWithFormComponent
	],
	imports: [
		CommonModule,
		CharacterRoutingModule
	]
})
export class CharactersModule { }
