import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenreEditComponent } from './genre-edit.component';
import { GenreEditRoutingModule } from './genre-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    GenreEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    GenreEditComponent
  ]
})
export class GenreEditModule { }
