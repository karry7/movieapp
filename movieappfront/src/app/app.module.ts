import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmviewComponent } from './components/filmview/filmview.component';
import { FilmItemComponent } from './components/film-item/film-item.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './components/details/details.component';
import { FavorisComponent } from './components/favoris/favoris.component';
import { FormsModule } from '@angular/forms';
import { CommentaireComponent } from './components/commentaire/commentaire.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmviewComponent,
    FilmItemComponent,
    DetailsComponent,
    FavorisComponent,
    CommentaireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
