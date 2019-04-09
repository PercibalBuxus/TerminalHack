import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PasswordCrackerComponent } from './password-cracker/password-cracker.component';
import { MemoryMapperComponent } from './memory-mapper/memory-mapper.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PasswordCrackerComponent,
    MemoryMapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
