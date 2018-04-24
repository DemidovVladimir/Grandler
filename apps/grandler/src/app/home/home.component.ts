import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { HomeGetDataAction } from './home.actions';
import { BlogItem } from './home.module';
import { getBlogItems, getBlogItemsLoadedStatus } from './home.reducer';
import { Observable } from 'rxjs/Observable';
import { mouseHoverTrigger } from './home.animations';
import { getAppSearchTerm } from '../reducers/index';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    mouseHoverTrigger
  ]
})
export class HomeComponent implements OnInit {
  blogItems$: Observable<BlogItem[]>;
  blogItemsLoaded$: Observable<boolean>;
  hoverItem: BlogItem;
  searchTerm: any;
  loaded: boolean;

  constructor(private store: Store<any>) {
    this.blogItems$ = store.pipe(select(getBlogItems));
    this.blogItemsLoaded$ = store.pipe(select(getBlogItemsLoadedStatus));
    store.pipe(select(getAppSearchTerm)).subscribe(searchTerm => {
      this.searchTerm = new RegExp(searchTerm, 'i');
    });
  }

  ngOnInit() {
    this.store.dispatch(new HomeGetDataAction());
    this.blogItemsLoaded$.subscribe(status => {
      this.loaded = status;
    });
  }

  mouseEnter(blogItem: BlogItem) {
    this.hoverItem = blogItem;
  }
}
