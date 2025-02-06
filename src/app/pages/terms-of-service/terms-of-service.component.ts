import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-terms-of-service',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './terms-of-service.component.html',
  styleUrls: ['./terms-of-service.component.scss']
})
export class TermsOfServiceComponent implements OnInit {
  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top with smooth behavior
  }
}
