import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { EmailService } from '../../services/email.service'; // Import the service
declare let alertify: any;

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, TranslateModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'] // Fixed typo from 'styleUrl' to 'styleUrls'
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: '',
  };
  latitude: any;
  isSubmitting: any;

  constructor(private emailService: EmailService) {} // Inject the email service

  isFormValid(): boolean {
    return (
      this.formData.name.trim() !== '' &&
      this.formData.email.trim() !== '' &&
      this.isValidEmail(this.formData.email) &&
      this.formData.message.trim() !== ''
    );
  }

  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  onSubmit(): void {
    if (this.isFormValid()) {
      this.isSubmitting = true;  // Show the spinner
  
      // Create the template parameters object
      const templateParams = {
        name: this.formData.name,
        email: this.formData.email,
        message: this.formData.message,
        reply_to: this.formData.email,
      };
  
      // Use the email service to send the email
      this.emailService.sendEmail(templateParams)
        .then((response) => {
          this.isSubmitting = false;  // Hide the spinner
          alertify.success('Your message has been sent. Thank you!');
          this.resetForm();
        })
        .catch((error) => {
          this.isSubmitting = false;  // Hide the spinner
          alertify.error('Something went wrong. Please try again later.');
        });
    } else {
      console.log('Invalid form data:', this.formData);
      alertify.alert('Form Error', 'Please fill out all fields correctly before submitting.');
    }
  }
  

  resetForm(): void {
    this.formData = {
      name: '',
      email: '',
      message: '',
    };
  }
}
