import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
/* entry one */
import { ProductsComponent } from './products/products.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { RouterModule, Routes } from '@angular/router';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { SubcategoriesComponent } from './subcategories/subcategories.component';


const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'admin/product/New', component: ProductFormComponent }];

@NgModule({
  /**
   * entry second
   */
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductsComponent,
    ProductFormComponent,
    BsNavbarComponent,
    SubcategoriesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
