import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailsComponent } from './components/details/details.component';
import { FavorisComponent } from './components/favoris/favoris.component';
import { FilmviewComponent } from './components/filmview/filmview.component';

const routes: Routes = [
  { path: '', component: FilmviewComponent },
 
{path:'details/:id',component: DetailsComponent},

{path:'favoris',component: FavorisComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
