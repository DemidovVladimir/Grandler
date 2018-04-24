import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import {
  debounceTime,
  distinctUntilChanged, map,
  mapTo
} from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import { CleanAllErrorsAction, SearchAction } from './app.actions';
import { getAppError, getAppLogedInUser } from './reducers/index';
import { Observable } from 'rxjs/Observable';
import { timer } from 'rxjs/observable/timer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  navLinks: any;
  searchTerm$ = new Subject<string>();
  loggedInUser: string;
  showNotification$: Observable<boolean>;

  constructor(private store: Store<any>) {
    this.navLinks = [
      {path: '/', label: 'Главная'},
      {path: 'create', label: 'Запостить'},
      {path: 'login', label: 'Авторизироваться'}
    ];

    this.searchTerm$.pipe(
      debounceTime(400),
      distinctUntilChanged()
    )
      .subscribe(term => {
        this.store.dispatch(new SearchAction(term));
      });

    this.store.pipe(select(getAppLogedInUser)).subscribe(user => {
      this.loggedInUser = user;
    });

    // this.store.pipe(
    //   select(getAppError),
    //   map(error => {
    //     return error;
    //   })
    // ).subscribe(error => {
    //   this.authError = !!error;
    // });
  }

  ngOnInit() {
    this.store.pipe(
      select(getAppError),
      map(error => {
        timer(2000)
        console.log(error, ' - error map...');
        return error;
      })
    ).subscribe(error => {
      console.log(error, ' - error subscribe...');
    });
    // .subscribe(error => {
    // Observable.of(!!error);
    // const hide$: Observable<boolean> = timer(2000).pipe(
    //   mapTo(false)
    // );
    // this.showNotification$ = merge(show$, hide$);


    // hide$.subscribe(() => {
    //   this.store.dispatch(new CleanAllErrorsAction());
    // });
    // });
  }

  cleanErrors() {
    this.store.dispatch(new CleanAllErrorsAction());
  }
}
