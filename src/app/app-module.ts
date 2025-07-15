import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Layout } from './layout/layout';

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { provideHttpClient, withFetch } from '@angular/common/http';

@NgModule({
  declarations: [
    App,
    Layout
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatGridListModule
],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch())
  ],
  bootstrap: [App]
})
export class AppModule { }
