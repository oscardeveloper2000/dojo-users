import { debounceTime, switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '@models/user.model';
import { environment } from '@environments/environment';
import { BehaviorSubject, tap } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiUrl = environment.API_URL;
  users$ = new BehaviorSubject<User[]>([]);
  usersList: User[] | null = [];
  user!: User | null ;
  userId : number = 0;

  constructor(
    private http: HttpClient,
  ) { }

  getUsers() {
    return this.http.get<User[]>(`${this.apiUrl}/users`)
    .pipe(
      tap(users => {
        this.usersList = users;
        this.users$.next(users);
      })
    )
  }

  findUser(id: number){
    return this.user = this.usersList?.find(user => user.id === id) ?? null;
  }

  getUser(route: ActivatedRoute){
    return route.paramMap
    .pipe(
      switchMap(async (params: ParamMap) => {
         this.userId = Number(params.get('id'));
         return this.users$
      }),
      switchMap((users) => users),
      switchMap(async () => {
        this.user = this.findUser(this.userId)
        return this.user
      }));
  }
}
