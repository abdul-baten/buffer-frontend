import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';

@NgModule({
  bootstrap: [AppComponent],
  imports: [AppModule, ServerModule, ServerTransferStateModule]
})
export class AppServerModule {}
