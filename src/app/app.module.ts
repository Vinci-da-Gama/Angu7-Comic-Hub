import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';
import { StoreModule } from '@ngrx/store';
// import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreadcrumbComponent } from '../shareCompos/breadcrumb/breadcrumb.component';
import { NoFoundComponent } from './no-found/no-found.component';
import { HomeModule } from './home/home.module';
import { CharactersModule } from '../feetModules/characters/characters.module';

import { reducers } from '../store/app-store/app.reducers';
import { SingleComicServicService } from '../services/internal/singleComic/single-comic-servic.service';
import { BreadcrumbServiceService } from '../services/internal/breadCrumb/breadcrumb-service.service';

@NgModule({
	declarations: [
		AppComponent,
		BreadcrumbComponent,
		NoFoundComponent
	],
	imports: [
		BrowserModule.withServerTransition({ appId: 'comic-hub-app-propertyme' }),
		HttpClientModule,
		NgbModule,
		StoreModule.forRoot(reducers),
		// StoreRouterConnectingModule.forRoot(),
		EffectsModule.forRoot([]),
		!environment.production ? StoreDevtoolsModule.instrument() : [],
		AppRoutingModule,
		HomeModule,
		CharactersModule,
		NgxSpinnerModule
	],
	providers: [
		SingleComicServicService,
		BreadcrumbServiceService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
