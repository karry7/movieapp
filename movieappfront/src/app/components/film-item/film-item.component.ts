import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Film } from 'src/app/models/film';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css']
})
export class FilmItemComponent implements OnInit {
  @Input() film! : Film;

  constructor( public movieService: MovieService, private router:Router) { 
    
  }

  ngOnInit(): void {

  
    
    
  }
  openFilmDetails(id: string): any {
    return this.router.navigate(['/details/' + id]);
  }
  
 
  addToFavoris(film: Film){
    this.movieService.addToFavoris(film)
  }
}
