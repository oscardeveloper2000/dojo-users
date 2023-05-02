import { Component, OnInit } from '@angular/core';
import { UsersService } from '@services/users.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit{
  constructor(
    private usersSerivce: UsersService
  ){}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.usersSerivce.getUsers()
    .subscribe(() => {
      console.log("get users");
    })
  }
}
