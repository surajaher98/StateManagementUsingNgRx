import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of, pipe } from 'rxjs';
import * as userActions from './user.actions';
import { Action, Store } from '@ngrx/store';
import { UserService } from './services/user.service';
import { mergeMap, map, catchError } from 'rxjs/operators';


@Injectable()
export class UserEffects {



  constructor(private actions$: Actions, private userService: UserService) { }

  @Effect()
  loadUsers$: Observable<Action> = this.actions$.pipe(
    ofType(userActions.UserActionTypes.LoadUsers),
    mergeMap(
      action => this.userService.getUsers().pipe(
        map(users => (new userActions.LoadUsersSuccess({ data: users }))),
        catchError(err => of(new userActions.LoadUsersFailure({ error: err })))
      )
    )
  )

}
