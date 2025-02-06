import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit{
  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top with smooth behavior
  }
}
