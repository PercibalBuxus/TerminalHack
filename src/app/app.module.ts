import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PasswordCrackerComponent } from './password-cracker/password-cracker.component';
import { MemoryMapperComponent } from './memory-mapper/memory-mapper.component';
import { HttpClientModule } from '@angular/common/http';
import { FailComponent } from './fail/fail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TerminalComponent } from './terminal/terminal.component';
import { PrivateComponent } from './private/private.component';
import { DoomComponent } from './doom/doom.component';

@NgModule({
  declarations: [
    AppComponent,
    PasswordCrackerComponent,
    MemoryMapperComponent,
    FailComponent,
    TerminalComponent,
    PrivateComponent,
    DoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
