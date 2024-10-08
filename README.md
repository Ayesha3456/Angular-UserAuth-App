# User Authentication Angular Application

This is an Angular application for user authentication, including both sign-in/log-in and sign-up functionalities. It uses Angular Material for UI components and NgRx for state management.

## Features

- **Sign-In/Log-In Screen:**
  - Input for email or phone number.
  - Password field for authentication.
  - Success modal or inline message for authentication status.

- **Sign-Up Screen:**
  - **Step 1:**
    - Input for Name and Create Password.
    - Navigates to the next step with persisted data.
  - **Step 2:**
    - Input for Organization, Designation, Birth-date, City, and Pincode.
    - Error handling for unknown organization-id and validation for pincode.
    - Data persistence between steps.
