import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatusTypesComponent } from './status-types/status-types.component';

const routes: Routes = [
  { path :'status-types',component:StatusTypesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
