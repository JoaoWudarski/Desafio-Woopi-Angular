import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../teams.service';
import { User, UserService } from '../user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  mask = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  user: User = {
    name: "exemplo",
    lastName: "costa",
    username: "xxxxxx",
    age: 18,
    email: "exemplo@dominio.com",
    tel1: "99999999999",
    tel2Exists: false,
    tel2: "",
    address: "Rua X, numero Y",
    password: "aaaaa",
    teamId: 1,
  }

  senha : String;

  constructor(private userService : UserService, private teamsService : TeamsService) { }

  ngOnInit(): void {
  }
  
  getImageOfTeam(){
    return "/assets/" + this.teamsService.teams[this.user.teamId - 1].name + ".png";
  }

  getColorTeam(id : number){
    return this.teamsService.teams[id-1].name;
  }

  getRegister(){
    return this.userService.showRegister;
  }

  addUser(){
      const copy = Object.assign({} ,this.user);
      this.userService.addUser(copy);
  }

  telAppears(){
    if(this.user.tel2Exists == true)
      this.user.tel2Exists = false;
    else
      this.user.tel2Exists = true;  
  }

  nameButton(){
    if(this.user.tel2Exists == true)
      return "Remover outro telefone"
    else
      return "Adicionar outro telefone"
  }

  emailValid(){
      if(this.user.email.indexOf(" ") == -1){
        if(this.user.email.indexOf("@") != -1){
          if(this.user.email.indexOf("@") != 0 && this.user.email.indexOf("@") != (this.user.email.length - 1)){
            const str1 = this.user.email.substring(this.user.email.indexOf("@"));
            if(str1.indexOf(".") != -1 && str1.indexOf(".") != (str1.length - 1)){
              return true;
            }
          }

        }
      }
      return false;
  }

  userValid(){
    if(this.emailValid() && this.user.age >= 18 && this.validPassword() && 
    this.nameValid() && this.lastNameValid() && this.addressValid() && 
    this.validPassword() && this.validUserName())
      return true;
    else
      return false;  
  }

  nameValid(){
    if(this.user.name != "" && this.user.name.length >= 3)
      return true;
    else  
      return false;  
  }

  lastNameValid(){
    if(this.user.lastName != "" && this.user.lastName.length >= 3)
      return true;
    else  
      return false;  
  }

  addressValid(){
    if(this.user.address != "" && this.user.address.length > 3)
      return true;
    else
      return false;  
  }

  validPassword(){
    if(this.senha == this.user.password)
      return true;
    else
      return false;  
  }

  validUserName(){
    for(var i = 0; i < this.userService.users.length; i++){
      if(this.user.username == this.userService.users[i].username)
        return false;
    }
    return true;
  }
}
