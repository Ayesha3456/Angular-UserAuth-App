import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MockDataService } from '../mock-data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  emailOrPhone: string = '';
  password: string = '';
  errorMessage: string | null = null;
  ImagePath: string;
  ImagePath1: string;
  loadingImagePath: string;
  isLoading: boolean = false;

  constructor(private router: Router, private mockDataService: MockDataService) {
    this.ImagePath = 'assets/solve.png';
    this.ImagePath1 = 'assets/image.png';
    this.loadingImagePath = 'assets/Tick.png';
  }

  onSignIn() {
    const isValidUser = this.mockDataService.validateUser(this.emailOrPhone, this.password);
    if (isValidUser) {
      this.errorMessage = null;
      alert('Login successful!');
      this.isLoading = true;
    } else {
      this.errorMessage = 'Invalid email or password';
    }
  }
}
