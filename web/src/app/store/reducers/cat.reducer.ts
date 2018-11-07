import * as fromCat from '@actions/cat.action';

export interface State {
  cats: any;
}

const initialState: State = {
  cats: []
};

export function reducer(
  state: State = initialState,
  action: any
): State {
  switch (action.type) {
    case fromCat.CatActionType.FETCH_DATA_DONE:  {
      return {
        cats: action.data
      };
    }
    default:
    return state;
  }
}

export const getListCat = (state: State) => state.cats;
