import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookEditComponent } from './book-edit.component';
import { BookEditRoutingModule } from './book-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    BookEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    BookEditComponent
  ]
})
export class BookEditModule { }
