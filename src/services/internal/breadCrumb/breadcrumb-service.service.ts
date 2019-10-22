import { Injectable } from '@angular/core';

import { Comic } from '../../../contracts/models/comic';

@Injectable({
	providedIn: 'root'
})
export class BreadcrumbServiceService {
	isShowNxBreadCrume: boolean = false
	comicTitle: string = ''

	constructor() { }

	setShow(isShow: boolean): void {
		this.isShowNxBreadCrume = isShow
	}

	getShow(): boolean {
		return this.isShowNxBreadCrume;
	}

	setTitle(t: string): void {
		this.comicTitle = t;
	}

	getTitle(): string {
		debugger
		return this.comicTitle;
	}

}
