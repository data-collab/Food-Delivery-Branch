import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private router: Router) {

  }

  featuredMenus = [
    {
      name: 'Grilled Chicken Salad',
      image: 'https://www.shutterstock.com/image-photo/classic-hamburger-stock-photo-isolated-600nw-2282033179.jpg',
      description: 'A delicious mix of fresh greens and grilled chicken.',
    },
    {
      name: 'Pasta Carbonara',
      image: 'https://i.ytimg.com/vi/iQ38VKAjQgo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBYeSca3xOzPVWec6G-I6XqaZ8z4Q',
      description: 'Classic Italian pasta with creamy sauce and bacon.',
    },
    {
      name: 'Vegan Bowl',
      image: 'https://www.allrecipes.com/thmb/DOhcP7hAGP_ams-a-M8A-16TeK4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-161469-the-best-ever-chicken-nuggets-DDMFS-4x3-e0f5af0ce26241d888967904f66962c7.jpg',
      description: 'Healthy bowl with quinoa, veggies, and avocado.',
    },
  ];

  goToMenuPage() {
    this.router.navigate(['/menus']); // Replace '/new-page' with your target route
  }
}
