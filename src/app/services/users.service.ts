import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '@models/user.model';
import { environment } from '@environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiUrl = environment.API_URL;

  constructor(
    private http: HttpClient
  ) { }

  getUsers() {
    return this.http.get<User[]>(`${this.apiUrl}/users`)
  }
}
