import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignupComponent } from './user/signup/signup.component';
import {appRoutes} from './routes';
import {HttpClientModule} from '@angular/common/http';
import { NavigationComponent } from './user/navigation/navigation.component';
import { HomeComponent } from './user/home/home.component';
import { ShoppingCartComponent } from './user/shopping-cart/shopping-cart.component';
import { ProductListComponent } from './user/shopping-cart/product-list/product-list.component';
import { FiltersComponent } from './user/shopping-cart/filters/filters.component';
import { CartComponent } from './user/shopping-cart/cart/cart.component';
import { CartItemComponent } from './user/shopping-cart/cart/cart-item/cart-item.component';
import { ProductItemComponent } from './user/shopping-cart/product-list/product-item/product-item.component';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignupComponent,
    NavigationComponent,
    HomeComponent,
    ShoppingCartComponent,
    ProductListComponent,
    FiltersComponent,
    CartComponent,
    CartItemComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
