import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";

import {User, UserData} from "./user";

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  private usersUrl = 'https://reqres.in/api/users?page=';
  private usersUrlById = 'https://reqres.in/api/users/';

  constructor(private http: HttpClient) { }

  public getUserById(id: string): Observable<User> {
    return this.http.get<User>(this.usersUrlById + id).pipe(
        catchError(err => of(err.message))
    );
  }

  public getMyUsers(page: number): Observable<UserData> {
    return this.http.get(this.usersUrl + page).pipe(
        catchError(err => of(err.message))
    );
  }
}
