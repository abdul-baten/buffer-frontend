/* eslint-disable @typescript-eslint/naming-convention */
import { AppEffects } from '../app.effects';
import { CommonModule } from '@angular/common';
import { DefaultDataServiceConfig, EntityDataModule } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { entity_config } from './entity.meta';
import { environment } from 'src/environments/environment';
import { NgModule } from '@angular/core';
import { reducers } from '../reducers';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

export const default_data_service_config: DefaultDataServiceConfig = {
  root: environment.api_base_uri,
  timeout: 3000
};

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forRoot([AppEffects]),
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictActionImmutability: true,
        strictActionSerializability: true,
        strictStateImmutability: true,
        strictStateSerializability: true
      }
    }),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production,
      maxAge: 25
    }),
    StoreRouterConnectingModule.forRoot({
      routerState: RouterState.Minimal,
      stateKey: 'router'
    }),
    EntityDataModule.forRoot(entity_config)
  ],
  providers: [
    {
      provide: DefaultDataServiceConfig,
      useValue: default_data_service_config
    }
  ]
})
export class EntityStoreModule {}
