import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  form: any = {
    username: '',
    email: '',
    password: ''
  };

  onSubmit(): void {
    // Handle the sign-up logic here
    console.log('Form submitted', this.form);
  }
}
