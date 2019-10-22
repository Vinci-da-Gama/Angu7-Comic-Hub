import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Comic } from '../../../contracts/models/comic';
import { CrudService } from './../../../services/external/crud.service';
import { SingleComicServicService } from '../../../services/internal/singleComic/single-comic-servic.service';
import { BreadcrumbServiceService } from '../../../services/internal/breadCrumb/breadcrumb-service.service';

@Component({
	selector: 'app-comic-details-layout',
	templateUrl: './comic-details-layout.component.html',
	styleUrls: ['./comic-details-layout.component.scss']
})
export class ComicDetailsLayoutComponent implements OnInit {
	theComic: Comic | Object = {};
	title: string = '';

	constructor(
		private crudService: CrudService,
		private scService: SingleComicServicService,
		private bcService: BreadcrumbServiceService,
		private router: Router,
		private aRoute: ActivatedRoute
	) { }

	ngOnInit() {
		this.theComic = this.scService.getTargetComit();
		this.title = this.theComic['name'];
		if (Object.keys(this.theComic).length <= 0) {
			this.bcService.setShow(false)
			this.bcService.setTitle('')
			this.router.navigate([''], { relativeTo: this.aRoute })
		} else {
			this.bcService.setShow(true)
			this.bcService.setTitle(this.title)
		}
	}

}
