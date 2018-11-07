import * as fromZombie from '@actions/zombie.action';

export interface State {
  zombies: any;
}

const initialState: State = {
  zombies: []
};

export function reducer(
  state: State = initialState,
  action: any
): State {
  switch (action.type) {
    case fromZombie.ZombieActionType.FETCH_DATA_DONE:  {
      return {
        zombies: action.data
      };
    }
    default:
    return state;
  }
}

export const getListZombie = (state: State) => state.zombies;
