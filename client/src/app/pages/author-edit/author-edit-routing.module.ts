import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorEditComponent } from './author-edit.component';

const routes: Routes = [
  {
    path: '',
    component: AuthorEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorEditRoutingModule { }
