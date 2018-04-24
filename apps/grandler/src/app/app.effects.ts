import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import {
  LoginAction, LoginSuccessAction, PersistSearchAction, SearchAction,
  ShowRouteUnauthErrorAction
} from './app.actions';
import * as appActions from './app.actions';
import { map, switchMap } from 'rxjs/operators';
import { AuthService } from './services/auth.service';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { Go } from './router/router.actions';
import * as fromRouter from '@ngrx/router-store';

export interface User {
  user: {
    displayName: string
  };
}

@Injectable()
export class AppEffects {
  @Effect() appServe$: Observable<PersistSearchAction> = this.actions$.pipe(
    ofType(appActions.SEARCH),
    map((action: SearchAction) => new PersistSearchAction(action.payload))
  );

  @Effect() appLogin$: Observable<LoginSuccessAction> = this.actions$.pipe(
    ofType(appActions.LOGIN),
    map((action: LoginAction) => action.payload),
    switchMap(payload => fromPromise(this.authService[payload]())),
    map((res: User) => new LoginSuccessAction(res.user.displayName))
  );

  @Effect() successlLogin$: Observable<Go> = this.actions$.pipe(
    ofType(appActions.LOGIN_SUCCESS),
    map(() => new Go({path: ['/']}))
  );

  @Effect() notAuthed$: Observable<ShowRouteUnauthErrorAction> = this.actions$.pipe(
    ofType(fromRouter.ROUTER_CANCEL),
    map(() => new ShowRouteUnauthErrorAction())
  );

  constructor(private actions$: Actions, private authService: AuthService) {
  }
}
