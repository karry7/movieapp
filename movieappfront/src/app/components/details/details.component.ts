import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Commentaire } from 'src/app/models/commentaire';
import { Film } from 'src/app/models/film';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  filmId:string="";
  film:Film ;
  routeSub: Subscription;  
   films : Array<Film> 
commentaires:Array<Commentaire>
commentaire :Commentaire;
 

   contenu: string 


  constructor(private movieservice:MovieService,    private activatedRoute: ActivatedRoute,
    private  router : Router,
    ) { }

  ngOnInit(): void {

   
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      this.filmId = params['id'];
    
       this.getAll()
      
     
  
    })

    console.log(this.film)

    this.movieservice.getCommentaires().then((data:any)=>{  
        

       
      this.commentaires=data

    
        console.log(this.commentaires)
     
    }
    )     
      
  }


  
 

  getAll(){
    this.movieservice.getFilmFromServer().then((data:any)=>{  
        

      
      this.films=data.results
      
       
       
    

    
        console.log(this.films)

     

       
      
     }).then(()=> {
       this.getFilmDetails(this.filmId)
       alert("done")
       
        // this.httpService.getFilms(this.film.title,1).then((data)=>( console.log(data)))
    })
     
    
  }

  getFilmDetails(id: string){
    // this.film = this.films.find(film => film.id === id);
    for( let i =0 ; i<=this.films.length;i++){
         if(this.films[i].id==id){
             this.film=this.films[i]
       this.film.poster_path = this.movieservice.getImage(this.films[i].poster_path)
     
             console.log(this.film)
             

         }
    }

    
}


OnSubmit() {
  const commentaire : Commentaire = {
          id:this.filmId,
          contenu:this.contenu
  }
  
  this.movieservice.addCommentaire(commentaire).then(()=>alert("comment sent"))

}


}
