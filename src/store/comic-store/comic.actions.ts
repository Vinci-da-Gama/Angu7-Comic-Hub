import { Action } from '@ngrx/store';
import { Comic } from '../../contracts/models/comic';

export const SET_COMMICS = 'SET_COMMICS';
export const FETCH_ALL_COMICS = 'FETCH_ALL_COMICS';
export const STORE_ALL_COMMICS = 'STORE_ALL_COMMICS';

export class SetComics implements Action {
	readonly type = SET_COMMICS;
	constructor(
		public payload: Comic[]
	) { }
}

export class StoreAllComics implements Action {
	readonly type = STORE_ALL_COMMICS;
}

export class FetchAllComics implements Action {
	readonly type = FETCH_ALL_COMICS;
}

export type ComicActions =
	SetComics |
	StoreAllComics |
	FetchAllComics;
