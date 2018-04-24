import {map} from 'rxjs/operators/map';
import * as carsActions from './cars.actions';
import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {CarsGetDataAction, CarsGetDataSuccessAction} from './cars.actions';
import {AngularFirestore} from 'angularfire2/firestore';
import {switchMap} from 'rxjs/operators';
import {Car} from './cars.models';

@Injectable()
export class CarsEffects {
  @Effect() query$: Observable<CarsGetDataSuccessAction> = this.actions$.pipe(
    ofType(carsActions.GET_DATA),
    switchMap((action: CarsGetDataAction) => {
      const ref = this.afs.collection<Car>('cars');
      return ref.snapshotChanges().map(arr => {
        return arr.map(doc => {
          const data = doc.payload.doc.data();
          return {...data, compareTo: action.payload};
        });
      });
    }),
    map(arr => {
      const filteredCar = arr.filter(cars => {
        return Object.keys(cars)[0] === cars.compareTo;
      });
      return new CarsGetDataSuccessAction(filteredCar[0][Object.keys(filteredCar[0])[0]]);
    })
  );

  constructor(private actions$: Actions, private afs: AngularFirestore) {
  }
}
