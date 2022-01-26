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
import { DollsService } from './services/dolls.service';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { DollCardComponent } from './components/doll-card/doll-card.component';
import { DollsListComponent } from './components/dolls-list/dolls-list.component';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HeaderComponent } from './components/header/header.component';
import { CatalogFiltersComponent } from './components/catalog-filters/catalog-filters.component';
import { FooterComponent } from './components/footer/footer.component';
import { DollPageComponent } from './components/doll-page/doll-page.component';
import { UsersService } from './services/users.service';
import { RegisterModalComponent } from './components/register-modal/register-modal.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CookieService } from './services/cookie.service';
import { LoginModalComponent } from './components/login-modal/login-modal.component';

@NgModule({
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
    MatSelectModule,
    MatListModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  declarations: [
    AppComponent,
    StartPageComponent,
    MainPageComponent,
    UserPageComponent,
    CatalogPageComponent,
    ModalFormComponent,
    DollCardComponent,
    DollsListComponent,
    HeaderComponent,
    CatalogFiltersComponent,
    FooterComponent,
    LoginModalComponent,
    DollPageComponent,
    RegisterModalComponent,
  ],
  providers: [DollsService, UsersService, CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
