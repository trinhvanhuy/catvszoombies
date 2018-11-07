import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from './../../environments/environment';
import * as fromCat from '../store/reducers/cat.reducer';
import * as fromZombie from '../store/reducers/zombie.reducer';

export interface State {
 cat: fromCat.State;
 zombie: fromZombie.State;
}

export const reducers: ActionReducerMap<State> = {
 cat: fromCat.reducer,
 zombie: fromZombie.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const getCatState = createFeatureSelector<fromCat.State>('cat');
export const getCatList = createSelector(getCatState, fromCat.getListCat);

export const getZombieState = createFeatureSelector<fromZombie.State>('zombie');
export const getZombieList = createSelector(getZombieState, fromZombie.getListZombie);
