import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {routes} from './router/router.routes';
import {RouterStateSerializer, StoreRouterConnectingModule} from '@ngrx/router-store';
import {CustomSerializer} from './router/router.reducer';

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true }
    ),
    StoreRouterConnectingModule
  ],
  exports: [RouterModule],
  providers: [
    { provide: RouterStateSerializer, useClass: CustomSerializer }
  ]
})
export class AppRoutingModule {
}
