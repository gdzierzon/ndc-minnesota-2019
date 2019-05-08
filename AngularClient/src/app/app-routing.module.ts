import { CategoryInsertComponent } from './categories/category-insert/category-insert.component';
import { UsersComponent } from './users/users.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'users', component: UsersComponent},
  { path: 'categories',
    children: [
      { path: '', component: CategoriesComponent },
      { path: 'insert', component: CategoryInsertComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
