import {  NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    App,
    Login,
    Register,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    
   ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [App]
})
export class AppModule { }
