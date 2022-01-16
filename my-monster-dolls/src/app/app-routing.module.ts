import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartPageComponent } from './start-page/start-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { CatalogPageComponent } from './catalog-page/catalog-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { AdvSearchPageComponent } from './adv-search-page/adv-search-page.component';


const routes: Routes = [
  { path: '', component: StartPageComponent},
  { path: 'main-component', component: MainPageComponent },
  { path: 'user-component', component: UserPageComponent },
  { path: 'catalog-component', component: CatalogPageComponent },
  { path: 'search-component', component: SearchPageComponent },
  { path: 'adv-search-component', component: AdvSearchPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
