import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenreEditComponent } from './genre-edit.component';

const routes: Routes = [
  {
    path: '',
    component: GenreEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenreEditRoutingModule { }
