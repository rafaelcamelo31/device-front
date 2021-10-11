import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from './category';
import { CATEGORIES } from './mock-category';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor() {}

  getCategories(): Observable<Category[]> {
    const categories = of(CATEGORIES);
    return categories;
  }
}
