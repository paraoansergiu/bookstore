import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorListComponent } from './author-list.component';
import { AuthorListRoutingModule } from './author-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    AuthorListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    AuthorListComponent
  ]
})
export class AuthorListModule { }
