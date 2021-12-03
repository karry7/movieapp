import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Film } from 'src/app/models/film';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'app-filmview',
  templateUrl: './filmview.component.html',
  styleUrls: ['./filmview.component.css']
})
export class FilmviewComponent implements OnInit {
  films : Array<Film>=[];
  movieservice: MovieService;
  constructor(private movieService : MovieService,private router:Router) {
    this.movieservice=movieService;
    this.movieservice.getAllFilms().then(
      (data)=>this.films=data.results
    );
   }

  ngOnInit(): void {
  }
  openFavoris() {
    return this.router.navigate(['/favoris']);
  }

}
