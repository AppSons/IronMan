import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Comics } from '../interface';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class MarvelApiService {

     
  constructor( private http: HttpClient) { }

 

  getComics() {
    return this.http.get<Comics>(`${environment.URL_API}`)
      .pipe(map((data: any) => data.data.results));
  }
  
}



