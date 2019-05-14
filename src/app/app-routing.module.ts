import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PasswordCrackerComponent } from './password-cracker/password-cracker.component';
import { MemoryMapperComponent } from './memory-mapper/memory-mapper.component';
import { FailComponent } from './fail/fail.component';
import { PrivateComponent } from './private/private.component';
import { AppComponent } from './app.component';
import { DoomComponent } from './doom/doom.component';

const routes: Routes = [
  {path: 'passwordCrack', component: PasswordCrackerComponent},
  {path: 'memoryMapper', component: MemoryMapperComponent},
  {path: 'fail', component: FailComponent},
  {path: 'private', component: PrivateComponent},
  {path: 'doom', component: DoomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
