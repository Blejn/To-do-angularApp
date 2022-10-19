import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import localePL from '@angular/common/locales/pl';
import localeUs from '@angular/common/locales/es-US';
import { registerLocaleData } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainPageComponent } from './main-page/main-page.component';

registerLocaleData(localePL);
registerLocaleData(localeUs);
@NgModule({
  declarations: [AppComponent, LoginComponent, RegistrationComponent, NavBarComponent, MainPageComponent],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [{ provide: LOCALE_ID, useValue: 'pl-PL' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
