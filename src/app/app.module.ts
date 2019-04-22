import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PasswordCrackerComponent } from './password-cracker/password-cracker.component';
import { MemoryMapperComponent } from './memory-mapper/memory-mapper.component';
import { HttpClientModule } from '@angular/common/http';
import { FailComponent } from './fail/fail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgTerminalModule } from 'ng-terminal';
import { TerminalComponent } from './memory-mapper/terminal/terminal.component';
import { PrivateComponent } from './private/private.component'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PasswordCrackerComponent,
    MemoryMapperComponent,
    FailComponent,
    TerminalComponent,
    PrivateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgTerminalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
