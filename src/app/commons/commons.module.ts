import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonsRoutingModule } from './commons-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    CommonsRoutingModule
  ],
  declarations: [HomeComponent]
})
export class CommonsModule { }
