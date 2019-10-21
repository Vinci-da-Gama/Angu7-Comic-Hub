import { Component, OnInit } from '@angular/core';

import { Comic } from '../../../contracts/models/comic';
import { SingleComicServicService } from '../../../services/internal/singleComic/single-comic-servic.service';

@Component({
	selector: 'app-comic-details-layout',
	templateUrl: './comic-details-layout.component.html',
	styleUrls: ['./comic-details-layout.component.scss']
})
export class ComicDetailsLayoutComponent implements OnInit {
	theComic: Comic | Object = {};

	constructor(
		private scService: SingleComicServicService
	) { }

	ngOnInit() {
		this.theComic = this.scService.getTargetComit();
		console.log('20 -- theComic: ', this.theComic)
		/* this.scService.comicObj.subscribe((targetComic: Comic) => {
			console.log('21 -- targetComic: ', targetComic)
			this.theComic = targetComic;
		}); */
	}

}
