import { Component } from '@angular/core';

import { Mail } from '../../models/mail.interface';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'mail-folder',
  styleUrls: ['mail-folder.component.scss'],
  template: `
    <h2>Inbox</h2>
  
   <mail-item
      *ngFor="let message of (data | async).messages"
      [message]="message"> 
    </mail-item> 
  `
})
export class MailFolderComponent {
  data: Observable<{messages: Mail[] }> = this.route.data;
 constructor(private route: ActivatedRoute ) {}
}
