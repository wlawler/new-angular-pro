import { Component, Output, EventEmitter, ContentChild, AfterContentInit } from '@angular/core';
import { AuthRememberComponent} from "./auth-remember";

import { User } from './auth-form.interface';

@Component({
    selector: 'auth-form',
    templateUrl: './auth-form.html'
})
export class AuthFormComponent implements AfterContentInit {

    showMessage: boolean; 

    @ContentChild(AuthRememberComponent) remember: AuthRememberComponent

    @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

    ngAfterContentInit() {
        if (this.remember){
            this.remember.checked.subscribe((checked: boolean) => {
                this.showMessage
            })
        }

    }

    onSubmit(value: User) {
        this.submitted.emit(value);
    }

}
