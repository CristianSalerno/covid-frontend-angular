import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchBarComponent } from './search-bar/search-bar.component';


const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'search-bar', component: SearchBarComponent }
  /* {
    path: 'home',
    component: HeroComponent,
    children: [{ path: 'login', component: LoginComponent }]
  }, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
