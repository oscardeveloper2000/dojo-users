import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { User } from '@models/user.model';
import { UsersService } from '@services/users.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user!: User | null;
  usersList: User[] | null = null;
  userId : number = 0;
  private subscription !: Subscription;

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
      this.subscription = this.usersService.getUser(this.route).subscribe((user) => {
      this.user = user;
      console.log('this.user :>> ', this.user);
     });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
