import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/pages/home/home.component';
import { AboutComponent } from '../app/pages/about/about.component';
import { MenusComponent } from '../app/pages/menus/menus.component';
import { ContactComponent } from '../app/pages/contact/contact.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { TermsOfServiceComponent } from './pages/terms-of-service/terms-of-service.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' }, // Default route
  { path: 'about', component: AboutComponent },
  { path: 'menus', component: MenusComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'terms-of-service', component: TermsOfServiceComponent },
  { path: '**', redirectTo: '' }, // Wildcard route for 404 handling
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled', // Enable smooth scroll restoration
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
