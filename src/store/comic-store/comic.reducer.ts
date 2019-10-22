import { Comic } from '../../contracts/models/comic';
import * as cmiActions from './comic.actions';
import * as fromAppReducer from '../app-store/app.reducers';

export interface ComicFeatureState extends fromAppReducer.AppState {
	comics: ComicStateInterface
}

export interface ComicStateInterface {
	comics: Comic[]
}

const initialComicsState: ComicStateInterface = {
	comics: []
};

export function ComicsReducer(state = initialComicsState, action: cmiActions.ComicActions) {
	switch (action.type) {
		case (cmiActions.SET_COMMICS):
			return {
				...state,
				comics: [...action.payload]
			};
		default:
			return state;
	}
}
