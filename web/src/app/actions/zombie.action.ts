import { Action } from '@ngrx/store';

export enum ZombieActionType {
  FETCH_DATA = '[Zombie] FetchDataFromServer',
  FETCH_DATA_DONE  = '[Zombie] FetchDataFromServerDone',
  FETCH_DATA_FAILED  = '[Zombie] FetchDataFromServerFailed',
}

export class FetchDataFromServer implements Action {
  type = ZombieActionType.FETCH_DATA;
  constructor() {}
}

export class FetchDataFromServerDone implements Action {
  type = ZombieActionType.FETCH_DATA_DONE;
  constructor(public data: any) {}
}

export class FetchDataFromServerFailed implements Action {
  type = ZombieActionType.FETCH_DATA_FAILED;
  constructor(public err: any) {}
}

export type ZombieActionUnions =
FetchDataFromServer
| FetchDataFromServerDone
| FetchDataFromServerFailed;
