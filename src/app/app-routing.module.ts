import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CustomersComponent } from './customers/Customers.component';
import { CareerComponent } from './career/career.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'customer',component:CustomersComponent},
  {path:'career',component:CareerComponent},
  {path:'contact',component:ContactComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
