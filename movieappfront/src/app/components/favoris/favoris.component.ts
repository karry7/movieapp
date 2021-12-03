import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/models/film';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.css']
})
export class FavorisComponent implements OnInit {

  public films : Array<Film>

  constructor(
    private movieservice : MovieService
  ) { 


  }

  ngOnInit(): void {

    this.movieservice.getFavorits().then((data:any)=>{  
        

       
      this.films=data

      for(let i=0 ; i<this.films.length ; i ++  ){
       this.films[i].poster_path=  this.movieservice.getImage(this.films[i].poster_path)
       
       
      }

    
        console.log(this.films)
     

       
      
     })
  }

}
