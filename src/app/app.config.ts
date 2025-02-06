import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { importProvidersFrom } from '@angular/core';
import { provideZoneChangeDetection } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics } from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Define a modern functional interceptor
function authInterceptor(req: HttpRequest<any>, next: (req: HttpRequest<any>) => Observable<HttpEvent<any>>): Observable<HttpEvent<any>> {
  const clonedRequest = req.clone({
    setHeaders: {
      Authorization: `Bearer YOUR_TOKEN_HERE`, // Replace with dynamic token logic if needed
    },
  });
  return next(clonedRequest);
}

// Function to create a TranslateHttpLoader
export function httpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json'); // Define i18n file path
}

export const appConfig: ApplicationConfig = {
  providers: [
    // Router configuration
    provideRouter(routes),
    importProvidersFrom(BrowserAnimationsModule),
    // Translation setup
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: httpLoaderFactory,
          deps: [HttpClient],
        },
      })
    ),

    // HTTP client with functional interceptor
    provideHttpClient(
      withInterceptors([authInterceptor]) // Attach functional interceptor
    ),

    // Firebase services
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'food-delivery-branch',
        appId: '1:1044596418353:web:40e6656f700566e79f3210',
        storageBucket: 'food-delivery-branch.firebasestorage.app',
        apiKey: 'AIzaSyCDd3jTMNb-jNW84AwrYHh0ffXLyR2sD60',
        authDomain: 'food-delivery-branch.firebaseapp.com',
        messagingSenderId: '1044596418353',
        measurementId: 'G-25Y1W0NX5T',
      })
    ),
    provideAuth(() => getAuth()),
    provideAnalytics(() => getAnalytics()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),

    // Angular optimizations
    provideZoneChangeDetection({ eventCoalescing: true, runCoalescing: true }),
  ],
};
