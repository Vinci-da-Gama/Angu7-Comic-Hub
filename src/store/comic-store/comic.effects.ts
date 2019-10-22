import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';

import { Comic } from '../../contracts/models/comic';
import * as fromComicReducer from './comic.reducer';
import * as cmiActions from './comic.actions';

@Injectable()
export class ComicsEffects {

	@Effect()
	comicsFetch = this.actions$.pipe(
		ofType(cmiActions.FETCH_ALL_COMICS),
		switchMap((action: cmiActions.FetchAllComics) => {
			return this.httpCli.get<Comic[]>('https://propertymecomics.s3.amazonaws.com/comics', {
				observe: 'body',
				responseType: 'json'
			});
		}),
		map((comics) => {
				if (comics !== null) {
					return {
						type: cmiActions.SET_COMMICS,
						payload: comics
					};
				} else {
					console.log('30 -- no comics in database');
					return null;
				}
			}
		)
	);


	constructor(
		public actions$: Actions,
		private httpCli: HttpClient,
		private store: Store<fromComicReducer.ComicFeatureState>
	) { }

}
