import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { PasswordCrackerComponent } from './password-cracker/password-cracker.component';
import { MemoryMapperComponent } from './memory-mapper/memory-mapper.component';

const routes: Routes = [
  
  {path: 'passwordCrack', component: PasswordCrackerComponent},
  {path: 'memoryMapper', component: MemoryMapperComponent},
  {path: '**', component: MenuComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
