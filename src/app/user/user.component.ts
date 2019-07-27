import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

import {UsersServiceService} from "../users-service.service";
import {User} from "../user";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(
      private route: ActivatedRoute,
      private users: UsersServiceService,
      private location: Location
  ) { }

  user: User;

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.users.getUserById(id)
        .subscribe(
            user => this.user = user.data,
            err => console.error('Caught ' + err));
  }

  goBack(): void {
    this.location.back();
  }

}
