import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor() { 
    const firebaseConfig = {
    apiKey: 'AIzaSyCDd3jTMNb-jNW84AwrYHh0ffXLyR2sD60',
    authDomain: 'food-delivery-branch.firebaseapp.com',
    projectId: 'food-delivery-branch',
    storageBucket: 'food-delivery-branch.firebasestorage.app',
    messagingSenderId: '1044596418353',
    appId: '1:1044596418353:web:40e6656f700566e79f3210',
    measurementId: 'G-25Y1W0NX5T',
  };

  const app = initializeApp(firebaseConfig);
  getAnalytics(app);
  console.log('Firebase initialized');
  }
}

