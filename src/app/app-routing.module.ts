import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent }   from './users/users.component';
import { AlbumComponent }   from './album/album.component';
import { PhotoComponent }   from './photo/photo.component';


const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: 'album/:id', component: AlbumComponent },
  { path: 'photo/:id', component: PhotoComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}