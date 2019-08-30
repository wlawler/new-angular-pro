import { Component, ViewContainerRef, ViewChild, AfterContentInit, ComponentFactoryResolver, ComponentRef,TemplateRef } from '@angular/core';

import { AuthFormComponent } from './auth-form/auth-form.component';

import { User } from './auth-form/auth-form.interface';


@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',

})


export class AppComponent implements AfterContentInit {

  component: ComponentRef<AuthFormComponent>;

  @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef;

  @ViewChild('tmpl')  tmpl: TemplateRef<any>;
  constructor(
    private resolver: ComponentFactoryResolver
  ) {}

  ngAfterContentInit() {

  this.entry.createEmbeddedView(this.tmpl);
  }


  loginUser(user: User) {
    console.log('Login', user);
  }

}

