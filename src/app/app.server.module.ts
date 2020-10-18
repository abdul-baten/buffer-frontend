import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';

@NgModule({
  bootstrap: [AppComponent],
  imports: [AppModule, NoopAnimationsModule, ServerModule, ServerTransferStateModule]
})
export class AppServerModule {}
