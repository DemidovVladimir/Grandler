import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {select, Store} from '@ngrx/store';
import {Car} from './cars.models';
import {getCarProblems, getCarTitle} from './cars.reducer';
import {CarsGetDataAction} from './cars.actions';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit, OnDestroy {
  private sub: any;
  carTitle: string;
  title$: Observable<string>;

  constructor(private route: ActivatedRoute, private store: Store<Car>) {
    this.title$ = store.pipe(select(getCarTitle));
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.carTitle = params['param'];
      this.store.dispatch(new CarsGetDataAction(this.carTitle));
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
