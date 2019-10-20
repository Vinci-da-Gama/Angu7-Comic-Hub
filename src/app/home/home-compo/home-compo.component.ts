import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';

import { Comic } from '../../../contracts/models/comic';
import { CrudService } from '../../../services/external/crud.service';

@Component({
	selector: 'app-home-compo',
	templateUrl: './home-compo.component.html',
	styleUrls: ['./home-compo.component.scss']
})
export class HomeCompo implements OnInit {
	comicsData: Comic[] = [];

	constructor(
		private curdService: CrudService
	) { }

	ngOnInit() {
		this.curdService.getAllComics()
			.subscribe((data: HttpResponse<Comic[]>) => {
				console.log('21 -- data: ', data.body)
				this.comicsData = data.body;
			})
	}

}
