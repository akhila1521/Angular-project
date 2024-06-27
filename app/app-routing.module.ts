import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SampleComponent } from './sample/sample.component';
import { HelloComponent } from './hello/hello.component';
import { ExampleComponent } from './example/example.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { UsercardsComponent } from './usercards/usercards.component';
import { NotFoundErrorComponent } from './not-found-error/not-found-error.component';
import { AuthGuard } from './auth.guard';
import { CheckoutformComponent } from './checkoutform/checkoutform.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'sample', component: SampleComponent},
  {path:'hello', component: HelloComponent},
  {path:'example', component:ExampleComponent},
  {path: 'home', component:HomeComponent},
  {path:'contact', component:ContactComponent},
  {path:'checkoutform', component:CheckoutformComponent},
  {path:'usercards', component:UsercardsComponent, canActivate:[AuthGuard]},
  {path:'**', component:NotFoundErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
