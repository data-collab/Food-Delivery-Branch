import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  constructor(private translate: TranslateService) {
    this.setLanguage('en'); // Default language
  }

  // Set the active language
  setLanguage(language: string): void {
    this.translate.setDefaultLang(language);
    this.translate.use(language);
  }

  // Get the current language
  getCurrentLanguage(): string {
    return this.translate.currentLang || 'en';
  }

  // Switch to a different language dynamically
  changeLanguage(language: string): void {
    this.setLanguage(language);
  }
}
