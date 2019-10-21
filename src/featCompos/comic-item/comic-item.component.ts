import { Component, Input } from '@angular/core';

import { Comic } from '../../contracts/models/comic';
import { SingleComicServicService } from '../../services/internal/singleComic/single-comic-servic.service';

@Component({
	selector: 'app-comic-item',
	templateUrl: './comic-item.component.html',
	styleUrls: ['./comic-item.component.scss']
})
export class ComicItemComponent {
	@Input() comic: Comic;
	@Input() idx: number;

	constructor(
		private scService: SingleComicServicService
	) { }

	passComicById() {
		this.scService.setTargetComic(this.comic)
	}

}
