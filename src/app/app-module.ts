import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import localeHu from '@angular/common/locales/hu';
import { registerLocaleData, NgOptimizedImage } from '@angular/common';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ManUtd } from './man-utd/man-utd';
import { PL } from './pl/pl';
import { Vidi } from './vidi/vidi';
import { NbII } from './nb-ii/nb-ii';
import { Hiba } from './hiba/hiba';
import { provideHttpClient } from '@angular/common/http';

registerLocaleData(localeHu);

@NgModule({
  declarations: [App, ManUtd, PL, Vidi, NbII, Hiba],
  imports: [BrowserModule, AppRoutingModule, NgOptimizedImage],
  providers: [provideBrowserGlobalErrorListeners(), provideClientHydration(), provideHttpClient()],
  bootstrap: [App],
})
export class AppModule {}
