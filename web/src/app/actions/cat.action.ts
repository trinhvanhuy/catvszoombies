import { Action } from '@ngrx/store';

export enum CatActionType {
  FETCH_DATA = '[Cat] FetchDataFromServer',
  FETCH_DATA_DONE  = '[Cat] FetchDataFromServerDone',
  FETCH_DATA_FAILED  = '[Cat] FetchDataFromServerFailed',
}

export class FetchDataFromServer implements Action {
  type = CatActionType.FETCH_DATA;
  constructor() {}
}

export class FetchDataFromServerDone implements Action {
  type = CatActionType.FETCH_DATA_DONE;
  constructor(public data: any) {}
}

export class FetchDataFromServerFailed implements Action {
  type = CatActionType.FETCH_DATA_FAILED;
  constructor(public err: any) {}
}

export type CatActionActionUnions =
FetchDataFromServer
| FetchDataFromServerDone
| FetchDataFromServerFailed;
