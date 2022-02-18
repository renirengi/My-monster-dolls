import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CatalogFiltersComponent } from './components/catalog-filters/catalog-filters.component';
import { CatalogPageComponent } from './components/catalog-page/catalog-page.component';
import { CookieService } from './services/cookie.service';
import { DollCardComponent } from './components/doll-card/doll-card.component';
import { DollPageComponent } from './components/doll-page/doll-page.component';
import { DollRatingComponent } from './components/doll-rating/doll-rating.component';
import { DollSliderComponent } from './components/doll-slider/doll-slider.component';
import { DollsListComponent } from './components/dolls-list/dolls-list.component';
import { DollsService } from './services/dolls.service';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginModalComponent } from './components/login-modal/login-modal.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { MainVideoSliderComponent } from './components/main-video-slider/main-video-slider.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { ModalFormComponent } from './components/modal-form/modal-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgImageSliderModule } from 'ng-image-slider';
import { OwnPageComponent } from './components/own-page/own-page.component';
import { RegisterModalComponent } from './components/register-modal/register-modal.component';
import { SellComponent } from './components/sell/sell.component';
import { SellModalComponent } from './components/sell-modal/sell-modal.component';
import { SliderComponent } from './components/slider/slider.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { StartPageComponent } from './components/start-page/start-page.component';
import { UserAboutComponent } from './components/user-about/user-about.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { UsersService } from './services/users.service';
import { WantedComponent } from './components/wanted/wanted.component';
import { CommentModalComponent } from './components/comment-modal/comment-modal.component';
import { DollCommentComponent } from './components/doll-comment/doll-comment.component';
import { DollVideoComponent } from './components/doll-video/doll-video.component';
import { DetailsRatingComponent } from './components/details-rating/details-rating.component';



@NgModule({
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    NgbModule,
    NgImageSliderModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AppComponent,
    CatalogFiltersComponent,
    CatalogPageComponent,
    DollCardComponent,
    DollPageComponent,
    DollRatingComponent,
    DollSliderComponent,
    DollsListComponent,
    FooterComponent,
    HeaderComponent,
    LoginModalComponent,
    MainPageComponent,
    MainVideoSliderComponent,
    ModalFormComponent,
    OwnPageComponent,
    RegisterModalComponent,
    SellComponent,
    SellModalComponent,
    SliderComponent,
    StarRatingComponent,
    StartPageComponent,
    UserAboutComponent,
    UserPageComponent,
    WantedComponent,
    CommentModalComponent,
    DollCommentComponent,
    DollVideoComponent,
    DetailsRatingComponent,

  ],
  providers: [DollsService, UsersService, CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
