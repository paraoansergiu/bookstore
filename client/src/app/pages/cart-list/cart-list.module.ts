import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './cart-list.component';
import { CartListRoutingModule } from './cart-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    CartListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    CartListComponent
  ]
})
export class CartListModule { }
