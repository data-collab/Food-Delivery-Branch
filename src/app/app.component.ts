import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FirebaseService } from './services/firebase.service';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'food-delivery';
  constructor(private firebaseService: FirebaseService, private router: Router) {
    console.log('Current Routes:', this.router.config);

  }
}
