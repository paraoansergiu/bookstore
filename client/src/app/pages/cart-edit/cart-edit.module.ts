import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartEditComponent } from './cart-edit.component';
import { CartEditRoutingModule } from './cart-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    CartEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    CartEditComponent
  ]
})
export class CartEditModule { }
