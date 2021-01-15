import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {PagesModule} from './pages/pages.module';

import { AppComponent } from './app.component';
import {NopagefoundComponent} from './nopagefound/nopagefound.component';
import {AuthModule} from "./auth/auth.module";



@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule
  ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
