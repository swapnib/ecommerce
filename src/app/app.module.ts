import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
/* entry one */
import { ProductsComponent } from './products/products.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { RouterModule, Routes } from '@angular/router';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { SubcategoriesComponent } from './subcategories/subcategories.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { FilterComponent } from './filter/filter.component';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'admin/product/New', component: ProductFormComponent },
  { path: 'products', component: ProductsComponent }];

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
    SubcategoriesComponent,
    FooterComponent,
    ProductComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,ReactiveFormsModule,NouisliderModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
