import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router) {}

  login(username: string, password: string): void {
    if (username === 'admin' && password === 'admin') {
      this.router.navigate(['/dashboard']);
    } else {
      console.log('Invalid credentials');
    }
  }
}
