import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home.routing.module';
import { HomeCompo } from './home-compo/home-compo.component';

@NgModule({
  declarations: [HomeCompo],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})

export class HomeModule { }
