import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MarvelApiService {

   
  publickey = '1deba2216544ad56f5491ee890f937f7';
  hash = '3a2c602a882fef0c36463c78c055368a';
  URL_API = `https://gateway.marvel.com:443/v1/public/characters/1009368/comics?ts=9&apikey=${this.publickey}&hash=${this.hash}`;

  constructor( private http: HttpClient) { }

  getAllCharacters(): Observable<any> { 
    return this.http.get<any>(this.URL_API)
     .pipe(map((data: any) => data.data.results))
  }

  getAllComics(): Observable<any> { 
    
    return this.http.get<any>(this.URL_API)
     .pipe(map((data: any) => data.data.results));
     
  }
}



