import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {  map} from 'rxjs/operators';
import { environment } from '../../environments/environment';

import { Comics} from '../interface';



@Injectable({
  providedIn: 'root'
})
export class MarvelApiService {

  
  
  
  constructor( private http: HttpClient) { } 

  getPersonaje() {
    return this.http.get(`${environment.Url_API_P}`)
      .pipe(map((data: any) => data.data.results));
      
  }


  getComics() {   
         return this.http.get<Comics>(`${environment.URL_API}`)
                 .pipe(                   
                   map((data: any) => data.data.results),
                   
                  );
     
      
      
       
  }



  getDetailComics(id: number ) {      
     
    return this.http.get<Comics>(`${environment.Url_Comic}${id}${environment.key_api}`)
      .pipe(
        map((data: any) => data.data.results));      
            
      
  }

  
 
}



