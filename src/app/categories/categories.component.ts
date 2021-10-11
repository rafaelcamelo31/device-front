import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './categories.service';
import { Category } from './category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [];

  constructor(private categoryService: CategoriesService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.categoryService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  add(name: string): void {
    name = name.trim();
    if (!name) return;
    this.categoryService
      .addCategory({ name } as Category)
      .subscribe((category) => {
        this.categories.push(category);
      });
  }

  delete(category: Category): void {
    this.categories = this.categories.filter((c) => c !== category);
    this.categoryService.deleteCategory(category.id).subscribe();
  }
}
