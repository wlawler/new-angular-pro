import { Component} from '@angular/core';

import { AuthFormComponent } from './auth-form/auth-form.component';

import { User } from './auth-form/auth-form.interface';


@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',

})


export class AppComponent  {
CTX = {
  $implicit: 'Wes Lawler',
  location: 'Louisville,Kentucky'
};
}

