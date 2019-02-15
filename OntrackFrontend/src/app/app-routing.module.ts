import { HomeComponent } from './ontrack/components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardComponent } from './ontrack/components/card/card.component';
import { RegistrationcompComponent } from './ontrack/components/registrationcomp/registrationcomp.component';


const routes: Routes = [
  {
    path: 'AddToCart', component: CardComponent
  },
  {
    path: 'registration', component: RegistrationcompComponent
  },
  {
    path: 'onKey($event)', component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
