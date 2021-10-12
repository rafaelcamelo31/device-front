import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Category } from './category';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private categoriesUrl = 'https://device-back.herokuapp.com/categories';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http
      .get<Category[]>(this.categoriesUrl)
      .pipe(catchError(this.handleError<Category[]>([])));
  }

  getCategory(id: number): Observable<Category> {
    return this.http
      .get<Category>(this.categoriesUrl + `/${id}`)
      .pipe(catchError(this.handleError<Category>()));
  }

  addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(
      this.categoriesUrl,
      category,
      this.httpOptions
    );
  }

  deleteCategory(id: number): Observable<Category> {
    return this.http
      .delete<Category>(this.categoriesUrl + `/${id}`)
      .pipe(catchError(this.handleError<Category>()));
  }

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
