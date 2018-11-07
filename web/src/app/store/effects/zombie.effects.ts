import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { defer, Observable, of, from, merge } from 'rxjs';
import { catchError, map, mergeMap, switchMap, toArray, take } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { CatActionType, CatActionActionUnions } from '@actions/cat.action';
import * as fromZombie from '@actions/zombie.action';
import { ZombieService } from '@services/zombie.service';

@Injectable()
export class Zombieeffects {

  @Effect()
  fetchDataFromServer$: Observable<any> = this.actions$.pipe(
    ofType(CatActionType.FETCH_DATA),
    switchMap((action: any) => {
      return this.zombieService.fetchDataFromServer()
        .pipe(
          map((data) => {
            return new fromZombie.FetchDataFromServerDone(data);
          }),
          catchError(err => {
            return of(new fromZombie.FetchDataFromServerDone(err));
          })
        );
    }
    )
  );


  constructor(
    private actions$: Actions,
    private zombieService: ZombieService
  ) {}
}
