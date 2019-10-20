import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { NoFoundModule } from './no-found/no-found.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule.withServerTransition({ appId: 'comic-hub-app-propertyme' }),
		HttpClientModule,
		NgbModule,
		!environment.production ? StoreDevtoolsModule.instrument() : [],
		AppRoutingModule,
		HomeModule,
		NoFoundModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
