import { Component, Input } from '@angular/core';

import { Comic } from '../../contracts/models/comic';

@Component({
	selector: 'app-comic-item',
	templateUrl: './comic-item.component.html',
	styleUrls: ['./comic-item.component.scss']
})
export class ComicItemComponent {
	@Input() comic: Comic;
	@Input() idx: number;

	passComicById(id) {
		
	}

}
