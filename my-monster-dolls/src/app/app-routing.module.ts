import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartPageComponent } from './start-page/start-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { CatalogPageComponent } from './catalog-page/catalog-page.component';
import { SecondStartPageComponent } from './second-start-page/second-start-page.component';

const routes: Routes = [
  { path: '', component: StartPageComponent},
  { path: 'main-component', component: MainPageComponent },
  { path: 'user-component', component: UserPageComponent },
  { path: 'catalog-component', component: CatalogPageComponent },
  { path: 'second-start-component', component: SecondStartPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
