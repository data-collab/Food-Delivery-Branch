import { Injectable } from '@angular/core';
import { Database, ref, set, get, child } from '@angular/fire/database';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {

  private db: Database = inject(Database); // Inject the Firebase Database instance

  // Method to create a new node (folder) and store data
  createMenu(menuData: any): Promise<void> {
    const menuRef = ref(this.db, 'featuredMenus');  // Reference to 'featuredMenus' node
    const newMenuRef = child(menuRef, menuData.name);  // Create a child node using the name of the menu
    return set(newMenuRef, menuData);  // Push the menu data into the database
  }

  // Method to fetch data from Firebase
  getFeaturedMenus(): Observable<any[]> {
    const menuRef = ref(this.db, 'featuredMenus');  // Reference to the 'featuredMenus' node
    return new Observable((observer) => {
      get(menuRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            observer.next(Object.values(snapshot.val()));  // Get the data from the node
          } else {
            observer.next([]);  // Return an empty array if no data exists
          }
        })
        .catch((error) => observer.error(error));
    });
  }
}
