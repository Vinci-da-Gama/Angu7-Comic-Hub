import { ActionReducerMap } from '@ngrx/store';
// import { Comic } from '../../contracts/models/comic';

// import * as fromComicReducer from '../comic-store/comic.reducer';

export interface AppState {
	// comics: fromComicReducer.ComicStateInterface
}

export const reducers: ActionReducerMap<AppState> = {
	// comics: fromComicReducer.ComicsReducer
	records: []
}
