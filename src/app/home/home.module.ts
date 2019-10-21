import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home.routing.module';
import { HomeCompo } from './home-compo/home-compo.component';
import { ComicItemComponent } from '../../featCompos/comic-item/comic-item.component';
import { ComicsReducer } from '../../store/comic-store/comic.reducer';
import { ComicsEffects } from '../../store/comic-store/comic.effects';

@NgModule({
  declarations: [HomeCompo, ComicItemComponent],
  imports: [
    StoreModule.forFeature('comics', ComicsReducer),
    EffectsModule.forFeature([ComicsEffects]),
    CommonModule,
    HomeRoutingModule
  ]
})

export class HomeModule { }
