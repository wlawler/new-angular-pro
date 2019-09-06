
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyForDirective} from './my-for/myfor.directive'

@NgModule({
  declarations: [
    AppComponent,
    MyForDirective
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}