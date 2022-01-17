import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartPageComponent } from './components/start-page/start-page.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { CatalogPageComponent } from './components/catalog-page/catalog-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalFormComponent } from './components/modal-form/modal-form.component';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { DollsService } from './services/dolls-service.service';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { AdvSearchPageComponent } from './components/adv-search-page/adv-search-page.component';
import { DollCardComponent } from './components/doll-card/doll-card.component';
import { DollsListComponent } from './components/dolls-list/dolls-list.component';
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
    DollCardComponent,
    DollsListComponent,
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
