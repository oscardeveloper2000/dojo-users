import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { UserComponent } from './components/user/user.component';



@NgModule({
  declarations: [
    UserListComponent,
    UserDetailComponent,
    UsersTableComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
