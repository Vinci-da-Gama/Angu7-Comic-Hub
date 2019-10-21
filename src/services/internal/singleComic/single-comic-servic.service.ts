import { Comic } from '../../../contracts/models/comic';

import { Injectable } from '@angular/core';

@Injectable()
export class SingleComicServicService {
	targetComic: Comic | Object = {}

	constructor(
	) { }

	setTargetComic(comic: Comic) {
		this.targetComic = comic;
	}

	getTargetComit() {
		return this.targetComic;
	}
}
