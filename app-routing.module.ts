import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudOperationsComponent } from './modules/crud/crud-operations/crud-operations.component';
import { LoginComponent } from './layout/login/login.component';

const routes: Routes = [
  { path : "" , component : LoginComponent},
  { path : "crud" , component : CrudOperationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
