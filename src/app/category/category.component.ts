import { Component } from '@angular/core';
import { CategoryService } from '../service/category.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

  constructor(private categoryService: CategoryService) {}

  onSubmit(form: NgForm){
    this.categoryService.saveCategory(form.value);
  }
}
