import { Component, OnInit } from '@angular/core';
import { DataSourceUser } from './data-source';
import { User } from '@models/user.model';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'phone'];
  dataSource = new DataSourceUser();
  user: User | null = null;
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
