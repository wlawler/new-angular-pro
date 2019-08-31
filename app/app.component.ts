import { Component, ViewContainerRef, ViewChild, AfterContentInit, ComponentFactoryResolver, ComponentRef,TemplateRef } from '@angular/core';

import { AuthFormComponent } from './auth-form/auth-form.component';

import { User } from './auth-form/auth-form.interface';


@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',

})


export class AppComponent  {

}

