import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Commentaire } from './models/commentaire';
import { Film } from './models/film';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getFilms(text:String,page:number){
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + '0697149ea65326dc3659c54195aace8a' +'&language=fr&query=' + text + "&page=" + page
    return this.http.get<Array<Film>>(url)
     .toPromise()
         .then((response:any)=>response)
         .catch((err)=>console.log(err));
  }
  

  getAllFilms(){
    return this.http.get<Array<Film>>(`https://api.themoviedb.org/3/trending/all/week?api_key=0697149ea65326dc3659c54195aace8a&language=en-US`).toPromise()
    .then((res: any)=>res).catch(err=>console.log(err))
  }
getImage(name:String){
  return 'https://image.tmdb.org/t/p/w300' + name;
}

getFilmFromServer() {
   

  return this.http.get<Array<Film>>(`https://api.themoviedb.org/3/trending/all/week?api_key=0697149ea65326dc3659c54195aace8a&language=en-US`).toPromise()
   .then((res: any)=>res).catch(err=>console.log(err))
}



addToFavoris(film : Film){
  const headers = { 'content-type': 'application/json'}  
  const body=JSON.stringify(film);
  console.log(body)
  return this.http.post('http://localhost:3001/movie', body,{'headers':headers}).toPromise()
  .then((response:any)=>response)
  .catch((err)=>console.log(err));
}


addCommentaire(commentaire : Commentaire){
  const headers = { 'content-type': 'application/json'}  
  const body=JSON.stringify(commentaire);
  console.log(body)
  return this.http.post('http://localhost:3001/commentaire', body,{'headers':headers}).toPromise()
  .then((response:any)=>response)
  .catch((err)=>console.log(err));
}



getFavorits(){

  return this.http.get<Array<Film>>(`http://localhost:3001/movie`).toPromise()
  .then((res: any)=>res).catch(err=>console.log(err))
  

 }

 
getCommentaires(){

  return this.http.get<Array<Film>>(`http://localhost:3001/commentaire`).toPromise()
  .then((res: any)=>res).catch(err=>console.log(err))
  

 }



}
