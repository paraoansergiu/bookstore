// DEPENDENCIES
import { NgModule } from '@angular/core';
import { CanActivate, RouterModule, Routes } from '@angular/router';

/* START MY VIEWS IMPORT */
// Do not edit this comment content, it will be overwritten in next Skaffolder generation
import { HomeComponent} from './pages/home/home.component';
import { AuthorEditComponent} from './pages/author-edit/author-edit.component';
import { AuthorListComponent} from './pages/author-list/author-list.component';
import { BookEditComponent} from './pages/book-edit/book-edit.component';
import { BookListComponent} from './pages/book-list/book-list.component';
import { CartEditComponent} from './pages/cart-edit/cart-edit.component';
import { CartListComponent} from './pages/cart-list/cart-list.component';
import { GenreEditComponent} from './pages/genre-edit/genre-edit.component';
import { GenreListComponent} from './pages/genre-list/genre-list.component';
import { UserEditComponent} from './pages/user-edit/user-edit.component';
import { UserListComponent} from './pages/user-list/user-list.component';

/* END MY VIEWS IMPORT */

// SECURITY
import { LoginComponent } from './pages/login/login.component';
import { ManageUserEditComponent } from './security/manage-user/edit-user/manage-user-edit.component';
import { ManageUserListComponent } from './security/manage-user/list-user/manage-user-list.component';
import { ProfileComponent } from './security/profile/profile.component';
import { AuthGuard } from './security/auth.guard';

/**
 * WEB APP ROUTES
 */
const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'  },

    /* START MY VIEWS */

    { path: 'authors/:id',  loadChildren: './pages/author-edit/author-edit.module#AuthorEditModule' , canActivate: [AuthGuard] },
    { path: 'authors',  loadChildren: './pages/author-list/author-list.module#AuthorListModule' , canActivate: [AuthGuard] },
    { path: 'books/:id',  loadChildren: './pages/book-edit/book-edit.module#BookEditModule' , canActivate: [AuthGuard] },
    { path: 'books',  loadChildren: './pages/book-list/book-list.module#BookListModule' , canActivate: [AuthGuard] },
    { path: 'carts/:id',  loadChildren: './pages/cart-edit/cart-edit.module#CartEditModule' , canActivate: [AuthGuard] },
    { path: 'carts',  loadChildren: './pages/cart-list/cart-list.module#CartListModule' , canActivate: [AuthGuard] },
    { path: 'genres/:id',  loadChildren: './pages/genre-edit/genre-edit.module#GenreEditModule' , canActivate: [AuthGuard] },
    { path: 'genres',  loadChildren: './pages/genre-list/genre-list.module#GenreListModule' , canActivate: [AuthGuard] },
    { path: 'home',  loadChildren: './pages/home/home.module#HomeModule' , canActivate: [AuthGuard] },
    { path: 'users/:id',  loadChildren: './pages/user-edit/user-edit.module#UserEditModule' , canActivate: [AuthGuard] },
    { path: 'users',  loadChildren: './pages/user-list/user-list.module#UserListModule' , canActivate: [AuthGuard] },

 /* END MY VIEWS */

    // SECURITY
    { path: 'manage-users',  loadChildren: './security/manage-user/list-user/manage-user-list.module#ManageUserListModule', canActivate: [AuthGuard], data: ['ADMIN']},
    { path: 'manage-users/:id',  loadChildren: './security/manage-user/edit-user/manage-user-edit.module#ManageUserEditModule', canActivate: [AuthGuard], data: ['ADMIN']},
    { path: 'profile',  loadChildren: './security/profile/profile.module#ProfileModule', canActivate: [AuthGuard] },
    { path: 'login', loadChildren: './pages/login/login.module#LoginModule'}
];

/**
 * ROUTING MODULE
 */
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
