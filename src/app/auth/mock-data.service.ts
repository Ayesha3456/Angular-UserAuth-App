import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MockDataService {
  private users = [
    { email: 'user1@example.com', phone: '1234567890', password: 'password1' },
    { email: 'user2@example.com', phone: '0987654321', password: 'password2' },
    { email: 'user3@example.com', phone: '1122334455', password: 'password3' },
  ];

  validateUser(emailOrPhone: string, password: string): boolean {
    return this.users.some(
      (user) =>
        (user.email === emailOrPhone || user.phone === emailOrPhone) &&
        user.password === password
    );
  }

  checkUserExists(emailOrPhone: string): boolean {
    return this.users.some(
      (user) => user.email === emailOrPhone || user.phone === emailOrPhone
    );
  }

  addUser(name: string, emailOrPhone: string, password: string): void {
    this.users.push({ email: emailOrPhone, phone: emailOrPhone, password });
  }
}
