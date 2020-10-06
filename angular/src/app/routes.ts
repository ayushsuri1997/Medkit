import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignupComponent } from './user/signup/signup.component';
import { HomeComponent } from './user/home/home.component';
import { NavigationComponent } from './user/navigation/navigation.component';
import { ShoppingCartComponent } from './user/shopping-cart/shopping-cart.component';
import { ProductListComponent } from './user/shopping-cart/product-list/product-list.component';
import { FiltersComponent } from './user/shopping-cart/filters/filters.component';
import { CartComponent } from './user/shopping-cart/cart/cart.component';


export const appRoutes: Routes = [
    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignupComponent }]
    },
    {
        path: 'home', component: UserComponent,
        children: [{ path: '', component: HomeComponent }]
    },
    {
        path: 'navigation', component: UserComponent,
        children: [{ path: '', component: NavigationComponent }]
    },
    {
        path: 'shopping-cart', component: UserComponent,
        children: [{ path: '', component: ShoppingCartComponent }]
    },
    {
        path: 'product-list', component: UserComponent,
        children: [{ path: '', component: ProductListComponent }]
    },
    {
        path: 'filters', component: UserComponent,
        children: [{ path: '', component:FiltersComponent }]
    },
    {
        path: 'cart', component: UserComponent,
        children: [{ path: '', component:CartComponent }]
    },

    {
        path: '', redirectTo: './home', pathMatch: 'full'
    }
];