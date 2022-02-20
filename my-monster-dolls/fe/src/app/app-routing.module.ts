import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartPageComponent } from './components/start-page/start-page.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { CatalogPageComponent } from './components/catalog-page/catalog-page.component';
import { DollPageComponent } from './components/doll-page/doll-page.component';
import { AllUsersPageComponent} from './components/all-users-page/all-users-page.component'

const routes: Routes = [
  { path: '', component: StartPageComponent},
  { path: 'main', component: MainPageComponent },
  { path: 'user', component: UserPageComponent },
  { path: 'catalog', component: CatalogPageComponent },
  { path: 'catalog/:id', component: DollPageComponent },
  { path: 'users', component: AllUsersPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
