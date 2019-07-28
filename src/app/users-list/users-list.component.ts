import { Component, OnInit } from '@angular/core';

import {UsersServiceService} from "../users-service.service";
import {User, UserData, UsersData} from "../user";
import {Observable} from "rxjs";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  usersList: User[];
  usersData: UsersData;
  currentPage: number = 1;
  loading: boolean = true;

  constructor(private users: UsersServiceService) { }

  ngOnInit() {
    this.getUsersList(this.currentPage);
  }

  getUsersList(page):void {
    this.users.getMyUsers(page)
        .subscribe(
            data => {
              this.usersData = data;
              this.usersList = this.usersData.data;
              this.loading = false;
            },
            err => console.error('Caught ' + err));
  }

  changePage(event): void {
    this.currentPage = event;
    this.getUsersList(this.currentPage);
  }

}
