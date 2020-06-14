import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorEditComponent } from './author-edit.component';
import { AuthorEditRoutingModule } from './author-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    AuthorEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    AuthorEditComponent
  ]
})
export class AuthorEditModule { }
