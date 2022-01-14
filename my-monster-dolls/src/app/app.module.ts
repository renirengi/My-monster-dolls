import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartPageComponent } from './start-page/start-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { CatalogPageComponent } from './catalog-page/catalog-page.component';


@NgModule({
   declarations: [
      AppComponent,
      StartPageComponent,
      MainPageComponent,
      UserPageComponent,
      CatalogPageComponent,
   ],
   imports: [
	 BrowserModule,
	 AppRoutingModule
	],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
