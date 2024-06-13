import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'; // Make sure to adjust the path if necessary

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: any = {
    username: '',
    password: ''
  };
  isLoginFailed: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    this.authService.login(this.form).subscribe(
      response => {
        // Handle successful login
        this.router.navigate(['/']);
      },
      error => {
        // Handle login failure
        this.isLoginFailed = true;
      }
    );
  }

  navigateToSignUp(): void {
  console.log('Navigating to sign up...');
  this.router.navigate(['/signup']).then(success => {
    if (success) {
      console.log('Navigation to sign up page succeeded');
    } else {
      console.log('Navigation to sign up page failed');
    }
  });
}

}
