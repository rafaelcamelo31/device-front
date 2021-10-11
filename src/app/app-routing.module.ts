import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { DevicesComponent } from './devices/devices.component';
import { DeviceDetailComponent } from './device-detail/device-detail.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/devices', pathMatch: 'full' },
  { path: 'devices', component: DevicesComponent },
  { path: 'devices/detail/:id', component: DeviceDetailComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'categories/detail/:id', component: CategoryDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
