import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../teams.service';
import { User, UserService } from '../user.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  constructor(public userService : UserService, private teamService : TeamsService) { }

  username : String;
  password : String;

  loginUser : User;
  team : String;
  loginActive : boolean = false;

  ngOnInit(): void {
  }

  login(){
    
    for(var i = 0; i < this.userService.users.length; i++){
      if(this.username == this.userService.users[i].username && this.password == this.userService.users[i].password){
        this.loginActive = true; 
        this.loginUser = this.userService.users[i];
        this.team = this.teamService.teams[this.loginUser.teamId - 1].name; 
        return;
      }     
    }
    this.loginActive = false;
    return false;
  }

  logoff(){
    this.loginActive = false;
  }

  getImageOfTeam(){
    return "/assets/" + this.teamService.teams[this.loginUser.teamId - 1].name + ".png";
  }

}
