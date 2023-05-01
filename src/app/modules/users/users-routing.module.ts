import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './pages/user-list/user-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: UserListComponent,
    title: 'Users'
  },
  {
    path: 'detail',
    component: UserDetailComponent,
    title: 'User Detail'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
