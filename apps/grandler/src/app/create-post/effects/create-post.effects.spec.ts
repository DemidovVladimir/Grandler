import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs/Observable';

import { CreatePostEffects } from './create-post.effects';

describe('CreatePostService', () => {
  let actions$: Observable<any>;
  let effects: CreatePostEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CreatePostEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(CreatePostEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
