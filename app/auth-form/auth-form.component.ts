import { User } from './auth-form.interface';

@Component({
  selector: 'auth-form',
  templateURL: ./auth-form.html,
  
})
export class AuthFormComponent {

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  onSubmit(value: User) {
    this.submitted.emit(value);
  }

}
