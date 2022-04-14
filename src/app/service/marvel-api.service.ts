import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Comics } from '../interface';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class MarvelApiService {

     
  constructor( private http: HttpClient) { }

 

  getComics() {
    return this.http.get<Comics>(`${environment.URL_API}`)
  }
  
}



