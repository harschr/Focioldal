import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ManUtd } from './man-utd/man-utd';
import { PL } from './pl/pl';
import { Vidi } from './vidi/vidi';
import { NbII } from './nb-ii/nb-ii';
import { Hiba } from './hiba/hiba';

@NgModule({
  declarations: [App, ManUtd, PL, Vidi, NbII, Hiba],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners(), provideClientHydration()],
  bootstrap: [App],
})
export class AppModule {}
