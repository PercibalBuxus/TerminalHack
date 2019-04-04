import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { JelszoFeltoroComponent } from './jelszo-feltoro/jelszo-feltoro.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    JelszoFeltoroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
