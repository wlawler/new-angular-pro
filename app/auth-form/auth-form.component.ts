import { User } from './auth-form.interface';
import {Component, Output, EventEmitter, ContentChildren,QueryList, AfterContentInit} from '@angular/core';
import {AuthRememberComponent} from './auth-remember';

@Component({
  selector: 'auth-form',
  templateUrl: "./auth-form.html",
  
})
export class AuthFormComponent implements AfterContentInit {

  showMessage: boolean;

  @ContentChildren(AuthRememberComponent) remember:QueryList<AuthRememberComponent>;

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  ngAfterContentInit() {
 if (this.remember){
   this.remember.forEach((item) => {
  item.checked.subscribe((checked: boolean) => this.showMessage = checked);
});
 
  //this.remember.checked.subscribe((checked: boolean) =>{ this.showMessage = checked;  });

   }
  }

  onSubmit(value: User) {
    this.submitted.emit(value);
  }

}
