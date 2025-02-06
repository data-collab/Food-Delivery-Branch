import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-menus',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './menus.component.html',
  styleUrl: './menus.component.scss',
  animations: [
    trigger('fadeInAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-in', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class MenusComponent implements OnInit {
  menuCategories = ['BREAKFAST', 'LUNCH', 'DINNER', 'DRINK'];
  selectedCategory = 'BREAKFAST';
  filteredMenus: any;
  menus = [
    {
      name: 'Pancakes',
      description: 'Fluffy pancakes served with syrup and fresh berries.',
      price: 5.99,
      image: 'https://www.allrecipes.com/thmb/pZtxkWhiaZdUmdhgv-Pj9EIMbVY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/45396-easy-pancakes-DDMFS-4x3-44411f993d7841d9b2b89bcc65bdd178.jpg',
      category: 'BREAKFAST',
    },
    {
      name: 'Caesar Salad',
      description: 'Crisp lettuce with parmesan and Caesar dressing.',
      price: 7.99,
      image: 'https://www.seriouseats.com/thmb/Fi_FEyVa3_-_uzfXh6OdLrzal2M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/the-best-caesar-salad-recipe-06-40e70f549ba2489db09355abd62f79a9.jpg',
      category: 'LUNCH',
    },
    {
      name: 'Steak Dinner',
      description: 'Juicy steak served with mashed potatoes and veggies.',
      price: 19.99,
      image: 'https://images.immediate.co.uk/production/volatile/sites/2/2022/09/Steak-roast-with-all-the-trimmings-d9c99ee.jpg?quality=90&resize=556,505',
      category: 'DINNER',
    },
    {
      name: 'Spaghetti Bolognese',
      description: 'Classic Italian pasta with rich tomato meat sauce.',
      price: 12.99,
      image: 'https://www.cookingwithnanaling.com/wp-content/uploads/2021/09/spaghetti-bolognese-sq.jpg',
      category: 'DINNER',
    },
    {
      name: 'Orange Juice',
      description: 'Freshly squeezed orange juice.',
      price: 3.99,
      image: 'https://img.freepik.com/premium-photo/orange-juice-is-being-poured-into-glass_81048-7916.jpg',
      category: 'DRINK',
    },
    {
      name: 'Veggie Wrap',
      description: 'Healthy wrap filled with fresh veggies and hummus.',
      price: 6.99,
      image: 'https://www.eatingwell.com/thmb/_KRmqSHZzUEWKQVE0uP3QLB98d4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/4526733-45129f82ed554ea1be3ac980d096a6f1.jpg',
      category: 'LUNCH',
    },
  ];


  ngOnInit(): void {
    this.filterMenus(this.selectedCategory);
  }

  filterMenus(category: string): void {
    this.selectedCategory = category;
    this.filteredMenus =
      category === 'ALL'
        ? this.menus
        : this.menus.filter((menu) => menu.category === category);
  }
}
