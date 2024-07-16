import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { samplePipe } from './products_pro/sample/sample.pipe';
import { sampleService } from './products_pro/sample/sample.service';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SampleComponent } from './products_pro/sample/sample.component';
import { AsyncPipe } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
//import { provideNativeDateAdapter } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
// import { ExampleComponent } from './products_pro/example/example.component';
// import { CustomDirective } from './custom.directive';
// import { HelloComponent } from './products_pro/hello/hello.component';
// import { HeaderComponent } from './products_pro/header/header.component';
// import { ContactComponent } from './products_pro/contact/contact.component';
// import { HomeComponent } from './products_pro/home/home.component';
// import { UsercardsComponent } from './products_pro/usercards/usercards.component';
// import { NotFoundErrorComponent } from './products_pro/not-found-error/not-found-error.component';
// import { CheckoutformComponent } from './products_pro/checkoutform/checkoutform.component';
// import { WithResolverComponent } from './products_pro/with-resolver/with-resolver.component';
// import { WithOutResolverComponent } from './products_pro/with-out-resolver/with-out-resolver.component';
// import { AdminComponent } from './products_pro/admin/admin.component';
// import { CartComponent } from './products_pro/cart/cart.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProductosComponent } from './productos/productos.component';
import { CarritoComponent } from './carrito/carrito.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SearchPipe } from './search.pipe';

@NgModule({

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
   ReactiveFormsModule,
   AsyncPipe,
   MatInputModule,
   MatFormFieldModule,
   MatAutocompleteModule,
   MatListModule,
   MatButtonModule,
   MatDividerModule,
   MatIconModule,
   MatButtonToggleModule,
   MatCardModule,
   MatCheckboxModule,
   FormsModule,
   MatDatepickerModule,
   MatExpansionModule
  ],

  declarations: [
     AppComponent,
    //  SampleComponent,
    //  samplePipe,
    //  ExampleComponent,
    //  CustomDirective,
    //  HelloComponent,
    //  HeaderComponent,
    //  ContactComponent,
    //  HomeComponent,
    //  UsercardsComponent,
    //  NotFoundErrorComponent,
    //  CheckoutformComponent,
    //  WithResolverComponent,
    //  WithOutResolverComponent,
    //  AdminComponent,
    //  ProductsComponent,
    //  CartComponent,
     NavbarComponent,
     FooterComponent,
     ProductosComponent,
     CarritoComponent,
     CheckoutComponent,
     SearchPipe,
  ],
  providers: [
    provideClientHydration(),
    sampleService,
  ],

  bootstrap: [AppComponent]
})

export class AppModule {}