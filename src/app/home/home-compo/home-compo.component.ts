import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

import { Comic } from '../../../contracts/models/comic';
import { CrudService } from '../../../services/external/crud.service';
import * as comicReducer from '../../../store/comic-store/comic.reducer';

@Component({
	selector: 'app-home-compo',
	templateUrl: './home-compo.component.html',
	styleUrls: ['./home-compo.component.scss']
})
export class HomeCompo implements OnInit {
	comicsData: Comic[] = [];
	showNxCrumb: boolean = false;
	// comicsData: Observable<comicReducer.ComicStateInterface>;

	constructor(
		private curdService: CrudService
		// private cStroe: Store<comicReducer.ComicFeatureState>
	) { }

	ngOnInit() {
		this.curdService.StoreAllComics()
			.subscribe((data: HttpResponse<Comic[]>) => {
				this.comicsData = data.body;
			})
		// this.comicsData = this.cStroe.select('comics');
	}

}
