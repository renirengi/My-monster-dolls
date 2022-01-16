import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartPageComponent } from './start-page/start-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { CatalogPageComponent } from './catalog-page/catalog-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalFormComponent } from './modal-form/modal-form.component';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { DollsService } from './services/dolls-service.service';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { SearchPageComponent } from './search-page/search-page.component';
import { AdvSearchPageComponent } from './adv-search-page/adv-search-page.component';
@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    MainPageComponent,
    UserPageComponent,
    CatalogPageComponent,
    ModalFormComponent,
    SearchPageComponent,
    AdvSearchPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
  ],
  providers: [DollsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
