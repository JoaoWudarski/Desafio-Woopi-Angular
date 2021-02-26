import { Injectable } from '@angular/core';
import { Team } from './Team';

export interface User{
  name: String;
  lastName: String;
  username: String;
  age: number;
  email: String;
  tel1: String;
  tel2Exists: boolean;
  tel2: String;
  address: String;
  password: String;
  teamId: number;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users : User[] = [];

  showLogin : boolean = false;
  showUsers : boolean = false;
  showRegister : boolean = false;

  constructor() { }

  addUser(user : User){
    if(!user.tel2Exists)
      user.tel2 = "";
    this.users.push(user);
    console.log(user);
  }

}
