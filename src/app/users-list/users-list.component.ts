import { Component, OnInit } from '@angular/core';

import {UsersServiceService} from "../users-service.service";
import {User} from "../user";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  usersList: User[];

  constructor(private users: UsersServiceService) { }

  ngOnInit() {
    this.getUserList();
  }

  getUserList():void {
    this.users.getMyUsers(1)
        .subscribe(
            users => this.usersList = users.data,
            err => console.error('Caught ' + err));
  }

}
