import { User } from './auth-form.interface';
import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'auth-form',
  templateUrl: "../auth-form.html",
  
})
export class AuthFormComponent {

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  onSubmit(value: User) {
    this.submitted.emit(value);
  }

}
