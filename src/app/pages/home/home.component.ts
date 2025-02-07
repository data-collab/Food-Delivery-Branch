import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { DatabaseService } from '../../services/database.service';  // Import the DatabaseService
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  featuredMenus: any[] = [];  // Array to store fetched menu items
  selectedMenu: any = null;    // Store the selected menu for the modal
  currentLang: string = 'en'; // Default language

  constructor(
    private router: Router,
    private dbService: DatabaseService, 
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    // Fetch current language from ngx-translate
    this.currentLang = this.translateService.currentLang || 'en';
    
    // Fetch menus from Firebase and process them
    this.fetchMenus();

    // Listen for language change events to update menu content
    this.translateService.onLangChange.subscribe((event) => {
      this.currentLang = event.lang;
      this.updateMenuContent();  // Update menus when language changes
    });
  }

  // Fetch menus from Firebase and update content based on the current language
  fetchMenus(): void {
    this.dbService.getFeaturedMenus().subscribe(
      (menus) => {
        this.featuredMenus = menus.map(menu => this.mapMenuData(menu));
      },
      (error) => {
        console.error('Error fetching menus:', error);
      }
    );
  }

  // Method to map Firebase data to the current language
  mapMenuData(menu: any): any {
    return {
      name: menu.name[this.currentLang] || menu.name['en'] || 'Default Name',
      description: menu.description[this.currentLang] || menu.description['en'] || 'Default Description',
      meals: {
        breakfast: menu.meals.breakfast[this.currentLang] || menu.meals.breakfast['en'] || 'Default Breakfast',
        lunch: menu.meals.lunch[this.currentLang] || menu.meals.lunch['en'] || 'Default Lunch',
        dinner: menu.meals.dinner[this.currentLang] || menu.meals.dinner['en'] || 'Default Dinner',
        appetizer: menu.meals.appetizer[this.currentLang] || menu.meals.appetizer['en'] || 'Default Appetizer',
        soup: menu.meals.soup[this.currentLang] || menu.meals.soup['en'] || 'Default Soup'
      },
      image: menu.image || 'https://via.placeholder.com/150'
    };
  }

  // Update menu content when the language changes
  updateMenuContent(): void {
    this.fetchMenus(); // Re-fetch the menus and apply translations
  }

  // Navigate to menu page
  goToMenuPage(): void {
    this.router.navigate(['/menus']);
  }

  // Open the menu details modal
  openMenuDetails(menu: any): void {
    this.selectedMenu = menu;  // Set the selected menu
    const modal = new bootstrap.Modal(document.getElementById('menuDetailsModal') as HTMLElement);
    modal.show();  // Show the modal
  }
}
