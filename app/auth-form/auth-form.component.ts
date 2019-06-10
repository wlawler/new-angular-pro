import { Component, Output, EventEmitter, ViewChildren,AfterViewInit, ContentChildren, QueryList,AfterContentInit, ChangeDetectorRef } from '@angular/core';
import { AuthRememberComponent} from "./auth-remember";
import { AuthMessageComponent} from "./auth-message";

import { User } from './auth-form.interface';

@Component({
    selector: 'auth-form',
    templateUrl: './auth-form.html'
})
export class AuthFormComponent implements AfterContentInit, AfterViewInit {

    showMessage: boolean; 

    @ViewChildren(AuthMessageComponent) message: QueryList <AuthMessageComponent>;

    @ContentChildren(AuthRememberComponent) remember: QueryList< AuthRememberComponent>;

    @Output() submitted: EventEmitter<User> = new EventEmitter<User>();
    constructor(private cd: ChangeDetectorRef) {}

    ngAfterViewInit(){
        if (this.message) {              
            this.message.forEach((message) => {
            message.days = 30;
            });
        this.cd.detectChanges();
        }
    }
    ngAfterContentInit() {
        
        if (this.remember){
            this.remember.forEach((item) => {
                item.this.remember.checked.subscribe((checked: boolean) => this.showMessage = checked); {
                       
            };
           // this.remember.checked.subscribe((checked: boolean) => {
             //   this.showMessage
         //   })
     //   }

    }

    onSubmit(value: User) {
        this.submitted.emit(value);
    },

}
