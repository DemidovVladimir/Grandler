import { map } from 'rxjs/operators/map';
import * as homeActions from './home.actions';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';
import { switchMap } from 'rxjs/operators';
import { HomeGetDataSuccessAction } from './home.actions';
import { BlogItem } from './home.module';

@Injectable()
export class HomeEffects {
  @Effect() query$: Observable<HomeGetDataSuccessAction> = this.actions$.pipe(
    ofType(homeActions.GET_DATA),
    switchMap(() => {
      const ref = this.afs.collection<BlogItem>('new_posts');
      return ref.snapshotChanges().map(arr => {
        return arr.map( doc => {
          const data = doc.payload.doc.data();
          return { id: doc.payload.doc.id, ...data } as BlogItem;
        });
      });
    }),
    map(arr => {
      return new HomeGetDataSuccessAction(arr);
    })
  );

  constructor(private actions$: Actions, private afs: AngularFirestore) {
  }
}
