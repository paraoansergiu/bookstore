import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartEditComponent } from './cart-edit.component';

const routes: Routes = [
  {
    path: '',
    component: CartEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartEditRoutingModule { }
