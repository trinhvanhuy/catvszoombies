import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { defer, Observable, of, from, merge } from 'rxjs';
import { catchError, map, mergeMap, switchMap, toArray, take } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { CatActionType, CatActionActionUnions } from '@actions/cat.action';
import * as fromCat from '@actions/cat.action';
import { CatService } from '@services/cat.service';

@Injectable()
export class Catffects {

  @Effect()
  fetchDataFromServer$: Observable<any> = this.actions$.pipe(
    ofType(CatActionType.FETCH_DATA),
    switchMap((action: any) => {
      return this.catService.fetchDataFromServer()
        .pipe(
          map((data) => {
            return new fromCat.FetchDataFromServerDone(data);
          }),
          catchError(err => {
            return of(new fromCat.FetchDataFromServerDone(err));
          })
        );
    }
    )
  );


  constructor(
    private actions$: Actions,
    private catService: CatService
  ) {}
}
