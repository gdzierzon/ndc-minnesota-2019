import { User } from './../models/user';
import { UsersService } from './users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {

    this.userService.getUsers()
      .subscribe(
        (response) => {
          this.users = response;
        },
        (error) => console.log(error)
      );
  }

}
