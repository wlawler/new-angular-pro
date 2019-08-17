import { Component } from "@angular/core";

import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-root',
  templateURL: './app.component.html',

})
export class AppComponent {

  createUser(user: User) {
    console.log('Create account', user);
  }

  loginUser(user: User) {
    console.log('Login', user);
  }

}
