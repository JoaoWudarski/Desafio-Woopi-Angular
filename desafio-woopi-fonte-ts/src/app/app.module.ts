import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TextMaskModule } from 'angular2-text-mask';

import { AppComponent } from './app.component';
import { NewUserComponent } from './new-user/new-user.component';
import { ShowUsersComponent } from './show-users/show-users.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { InitialViewComponent } from './initial-view/initial-view.component';

@NgModule({
  declarations: [
    AppComponent,
    NewUserComponent,
    ShowUsersComponent,
    LoginUserComponent,
    InitialViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TextMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
