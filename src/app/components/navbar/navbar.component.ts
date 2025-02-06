import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule], // Add RouterModule here
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'], // Fix typo from "styleUrl" to "styleUrls"
})
export class NavbarComponent {
  currentLanguage: string = 'en'; // Default language

  constructor(
    private router: Router,
    private translationService: TranslationService,
    private translate: TranslateService
    ) {      
      this.currentLanguage = this.translate.currentLang || 'en';
      console.log('hoo: ', this.currentLanguage);

  }
  chanLanguage(lang: string) {
    this.translationService.changeLanguage(lang);
    this.currentLanguage = lang; // Update the current language
  }
}
