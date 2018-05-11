import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './commons/home/home.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'clientes',
    component: CustomersListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
