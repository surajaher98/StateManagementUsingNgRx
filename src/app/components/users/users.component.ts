import { Component, OnInit } from '@angular/core';
import { IUsersModel } from '../../model/IUsersModel';
import { getUser } from '../../user.selectors';
import { Store, select } from '@ngrx/store';
import * as UserActions from '../../user.actions';
import * as UserSelector from '../../user.selectors';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userList: IUsersModel[]
  constructor(private store: Store) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    debugger
    this.store.dispatch(new UserActions.LoadUsers());
    this.store.pipe(select(UserSelector.getUser)).subscribe(user => {
      this.userList = user;
    })
  }
} 