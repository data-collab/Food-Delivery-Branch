import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpEvent, HttpRequest, provideHttpClient, withInterceptors } from '@angular/common/http';
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
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { environment } from '../environments/environments';

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

    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideDatabase(() => getDatabase()), // Ensure database is provided here
    // Router configuration
    provideRouter(routes),

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
    provideAuth(() => getAuth()),
    provideAnalytics(() => getAnalytics()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),

    // Angular optimizations
    provideZoneChangeDetection({ eventCoalescing: true, runCoalescing: true }),

    // Import animations module
    importProvidersFrom(BrowserAnimationsModule),
  ],
};
