import { Component, Input, OnInit } from '@angular/core';

import { Character } from '../../contracts/interfaces/charactor';
import { Comic } from '../../contracts/models/comic';

@Component({
	selector: 'app-character-with-form',
	templateUrl: './character-with-form.component.html',
	styleUrls: ['./character-with-form.component.scss']
})
export class CharacterWithFormComponent implements OnInit {
	@Input() comicObj: Comic;
	roles: Character[];

	constructor(
	) { }

	ngOnInit(): void {
		if (this.comicObj.characters && this.comicObj.characters.length > 0 ) {
			this.roles = this.comicObj.characters.sort((a, b) => a.numberOfRoles.localeCompare(b.numberOfRoles))
		}
	}

}
