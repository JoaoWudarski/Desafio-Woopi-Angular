import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-initial-view',
  templateUrl: './initial-view.component.html',
  styleUrls: ['./initial-view.component.css']
})
export class InitialViewComponent implements OnInit {

  constructor(private userService : UserService) { }

  ngOnInit(): void {
  }

  backgImage = '/assets/wlp_CBLOL.png'

  showLogin(){
    if(this.userService.showLogin == true)
      this.userService.showLogin = false;
    else{
      this.userService.showLogin = true;
      this.userService.showRegister = false;
      this.userService.showUsers = false;
    }
      
  }

  showRegister(){
    if(this.userService.showRegister == true)
      this.userService.showRegister = false;
      else{
        this.userService.showLogin = false;
        this.userService.showRegister = true;
        this.userService.showUsers = false;
      }
  }

  showUsers(){
    if(this.userService.showUsers == true)
      this.userService.showUsers = false;
      else{
        this.userService.showLogin = false;
        this.userService.showRegister = false;
        this.userService.showUsers = true;
      }
  }
}
