import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductosComponent } from './productos/productos.component';
import { CarritoComponent } from './carrito/carrito.component';
import { CheckoutComponent } from './checkout/checkout.component';
// import { SampleComponent } from './sample/sample.component';
// import { HelloComponent } from './hello/hello.component';
// import { ExampleComponent } from './example/example.component';
// import { HomeComponent } from './products_pro/home/home.component';
//  import { ContactComponent } from './products_pro/contact/contact.component';
// // import { UsercardsComponent } from './usercards/usercards.component';
// import { NotFoundErrorComponent } from './products_pro/not-found-error/not-found-error.component';
// import { AdminComponent } from './products_pro/admin/admin.component';
// import { CartComponent } from './products_pro/cart/cart.component';
// import { ProductsComponent } from './products/products.component';
// // import { AuthGuard } from './auth.guard';
// import { CheckoutformComponent } from './checkoutform/checkoutform.component';
// import { WithResolverComponent } from './with-resolver/with-resolver.component';
// import { UsersResolverService } from './users.resolver.service';
// import { WithOutResolverComponent } from './with-out-resolver/with-out-resolver.component';

const routes: Routes = [
  {path:'', component:ProductosComponent},
  {path:'productos', component:ProductosComponent},
  {path:'carrito', component:CarritoComponent},
  {path:'checkout', component:CheckoutComponent }
  // {path:'', component:HomeComponent},
  // // {path:'sample', component: SampleComponent},
  // // {path:'hello', component: HelloComponent},
  // // {path:'example', component:ExampleComponent},
  // {path:'admin',component:AdminComponent},
  // {path:'cart', component:CartComponent},
  // {path:'contact', component:ContactComponent},
  // {path:'home', component:HomeComponent},
  // {path:'products', component:ProductsComponent},
  // {path:'login', component:AdminComponent},
  // // {path:'checkoutform', component:CheckoutformComponent},
  // // {path:'usercards', component:UsercardsComponent, canActivate:[AuthGuard]},
  // // {path:'Resolver', component:WithResolverComponent,outlet:'with', resolve:{userR : UsersResolverService}},
  // // {path:'noResolver', component:WithOutResolverComponent, outlet:'without'},
  // {path:'error',component:NotFoundErrorComponent,data: {error:404}},
  // {path:'**', component:AdminComponent, data: {username:'Akhila', password:'12345789'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
