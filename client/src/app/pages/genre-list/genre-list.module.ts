import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenreListComponent } from './genre-list.component';
import { GenreListRoutingModule } from './genre-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    GenreListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    GenreListComponent
  ]
})
export class GenreListModule { }
