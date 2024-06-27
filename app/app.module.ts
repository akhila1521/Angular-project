import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { samplePipe } from './sample/sample.pipe';
import { sampleService } from './sample/sample.service';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SampleComponent } from './sample/sample.component';
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
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { ExampleComponent } from './example/example.component';
import { CustomDirective } from './custom.directive';
import { HelloComponent } from './hello/hello.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { UsercardsComponent } from './usercards/usercards.component';
import { NotFoundErrorComponent } from './not-found-error/not-found-error.component';
import { CheckoutformComponent } from './checkoutform/checkoutform.component';

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
    SampleComponent,
    samplePipe,
    ExampleComponent,
    CustomDirective,
    HelloComponent,
    HeaderComponent,
    ContactComponent,
    HomeComponent,
    UsercardsComponent,
    NotFoundErrorComponent,
    CheckoutformComponent,
  ],
  providers: [
    provideClientHydration(),
    sampleService,
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
