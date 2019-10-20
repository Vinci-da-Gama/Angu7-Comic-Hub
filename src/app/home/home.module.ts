import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home.routing.module';
import { HomeCompo } from './home-compo/home-compo.component';
import { ComicItemComponent } from '../../featCompos/comic-item/comic-item.component';

@NgModule({
  declarations: [HomeCompo, ComicItemComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})

export class HomeModule { }
