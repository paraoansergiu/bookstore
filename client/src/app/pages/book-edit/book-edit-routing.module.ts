import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookEditComponent } from './book-edit.component';

const routes: Routes = [
  {
    path: '',
    component: BookEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookEditRoutingModule { }
