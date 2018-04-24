import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoginAction } from '../../../app.actions';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  constructor(private store: Store<any>) {
  }

  signInWithFacebook() {
    console.log('TODO...');
  }

  signInWithGoogle() {
    this.store.dispatch(new LoginAction('signInWithGoogle'));
  }

  ngOnInit() {
  }

}
