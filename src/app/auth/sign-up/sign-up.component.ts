import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterOutlet, FormsModule, RouterModule, CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  currentStep = 1;
  name = '';
  emailOrPhone = '';
  password = '';
  organizationName = '';
  designation = '';
  birthDate = '';
  city = '';
  pincode = '';
  pincodeError = '';
  organizationError = '';
  loading = false;

  allowedOrganizations = [
      'Org1',
      'Org2',
      'Org3'
    ];

  designations = ['Software Engineer', 'Project Manager', 'Designer', 'Consultant'];
  ImagePath: string;
  ImagePath1: string;
  loadingImagePath: string;

  constructor(private router: Router) {
    this.ImagePath = 'assets/solve.png';
    this.ImagePath1 = 'assets/image.png';
    this.loadingImagePath = 'assets/Tick.png';
  }

  // Method to validate pincode
  isValidPincode(): boolean {
    const pincodePattern = /^\d{6}$/;
    return pincodePattern.test(this.pincode);
  }

  isValidOrganization(): boolean {
    return this.allowedOrganizations.includes(this.organizationName);
  }

  // Step 1: Continue button logic
  onContinueStep1() {
    if (this.name && this.emailOrPhone && this.password) {
      this.currentStep = 2;
    } else {
      alert('Please fill out all required fields.');
    }
  }

  // Step 2: Submit button logic
  onSubmitStep2() {
    if (!this.isValidPincode()) {
      this.pincodeError = 'Pincode must be 6 digits';
      alert(this.pincodeError);
      return;
    }

    if (!this.isValidOrganization()) {
      this.organizationError = 'Unknown organization-id';
      alert(this.organizationError);
      return;
    }

    // Additional validation checks
    if (!this.organizationName || !this.designation || !this.birthDate || !this.city) {
      alert('Please fill out all required fields.');
      return;
    }

    this.loading = true;

    setTimeout(() => {
      this.loading = false;
      this.router.navigate(['/success']); // Adjust the path as needed
    }, 3000); // Simulate a delay of 3 seconds
  }

  // Navigate back to Step 1
  onBack() {
    this.currentStep = 1;
  }
}
