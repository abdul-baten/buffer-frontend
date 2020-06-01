import { AppEffects } from './app.effects';
import { CommonModule } from '@angular/common';
import { DefaultDataServiceConfig, EntityDataModule } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { entityConfig } from './entity/entity.meta';
import { environment } from '@env/environment';
import { NgModule } from '@angular/core';
import { reducers } from './reducers';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

export const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: environment.apiURL,
  timeout: 3000,
};

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forRoot([AppEffects]),
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true,
      },
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
      routerState: RouterState.Minimal,
    }),
    EntityDataModule.forRoot(entityConfig),
  ],
  providers: [
    {
      provide: DefaultDataServiceConfig,
      useValue: defaultDataServiceConfig,
    },
  ],
})
export class EntityStoreModule {}
