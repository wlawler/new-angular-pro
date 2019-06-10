import { Component, Output, EventEmitter,ViewChild, ViewChildren,AfterViewInit, ContentChildren, QueryList,AfterContentInit, ChangeDetectorRef, ElementRef } from '@angular/core';
import { AuthRememberComponent} from "./auth-remember";
import { AuthMessageComponent} from "./auth-message";

import { User } from './auth-form.interface';

@Component({
    selector: 'auth-form',
    styleUrls:['./auth-form.css'],
    templateUrl: './auth-form.html'
})
export class AuthFormComponent implements AfterContentInit, AfterViewInit {

    showMessage: boolean; 

    @ViewChild('#email') email: ElementRef;

    @ViewChildren(AuthMessageComponent) message: QueryList <AuthMessageComponent>;

    @ContentChildren(AuthRememberComponent) remember: QueryList< AuthRememberComponent>;

    @Output() submitted: EventEmitter<User> = new EventEmitter<User>();
    constructor(private cd: ChangeDetectorRef) {}

    ngAfterViewInit(){
        this.email.nativeElement.setAttribute('placeholder','Enter your email address');
        this.email.nativeElement.classLists.add('email');
        this.email.nativeElement.focus();
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
