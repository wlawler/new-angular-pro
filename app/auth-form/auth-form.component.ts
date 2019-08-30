
import { Component, Output, EventEmitter } from '@angular/core';

import { User } from './auth-form.interface';

@Component({
  selector: 'auth-form' ,
  templateUrl: "./auth-form.html",
  styleUrls:[`
  .email {  border-color: #9f72e6;}
  
  `],

  
  
})
  
export class AuthFormComponent {

  title = 'Login';

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  onSubmit(value: User) {
    this.submitted.emit(value);
  }

}
