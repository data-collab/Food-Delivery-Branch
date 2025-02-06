import { Injectable } from '@angular/core';
import emailjs from 'emailjs-com';

@Injectable({
  providedIn: 'root',
})
export class EmailService {

  constructor() {}

  sendEmail(templateParams: any): Promise<any> {
    return emailjs.send(
      'service_29kem38',   // Replace with your service ID
      'template_kcpyjnv',  // Replace with your template ID
      templateParams,      // Form data to be passed
      'VwceKBnLYg2ncApSh'       // Replace with your user ID
    );
  }
}
