import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUsersModel } from '../model/IUsersModel';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUsersModel[]> {
    return this.http.get<IUsersModel[]>('https://jsonplaceholder.typicode.com/users');
  }
}
