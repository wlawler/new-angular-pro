import { User } from './auth-form.interface';
import {Component, Output, EventEmitter,ViewChild,AfterViewInit, ContentChildren,QueryList, AfterContentInit} from '@angular/core';
import {AuthRememberComponent} from './auth-remember';
import {AuthMessageComponent } from "./auth-message";
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
@Component({
  selector: 'auth-form',
  templateUrl: "./auth-form.html",
  
})
export class AuthFormComponent implements AfterContentInit, AfterViewInit {

  showMessage: boolean;

  @ViewChild(AuthMessageComponent) message:AuthMessageComponent;

  @ContentChildren(AuthRememberComponent) remember:QueryList<AuthRememberComponent>;

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  ngAfterViewInit(){

  }

  ngAfterContentInit() {
    if(this.message) {
       this.message.days =30;
    };
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
