import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormReactiveformCommonModule } from '../../app/form-reactiveform-common/form-reactiveform-common.module';
import { CharacterRoutingModule } from './characters-routing.module';
import { ComicDetailsLayoutComponent } from './comic-details-layout/comic-details-layout.component';
import { CharacterWithFormComponent } from '../../featCompos/character-with-form/character-with-form.component';
import { CharacterAddComponent } from '../../featCompos/character-add/character-add.component';

@NgModule({
	declarations: [
		ComicDetailsLayoutComponent,
		CharacterWithFormComponent,
		CharacterAddComponent
	],
	imports: [
		CommonModule,
		CharacterRoutingModule,
		FormReactiveformCommonModule
	]
})
export class CharactersModule { }
