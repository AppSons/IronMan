import { Component, OnInit } from '@angular/core';

import { MarvelApiService } from '../../service/marvel-api.service';

import { Comics } from '../../interface';





@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  public cargando: boolean = true;
  public comics : Comics [] = [];
  
  

  constructor( public marvelService: MarvelApiService) { }
   

  ngOnInit(): void {

    this.cargarComics();
    
    
  }
  
  cargarComics() {
    this.marvelService.getComics()
      .subscribe( (rescomics: Comics[]) => {
             this.cargando = false;
             console.log(rescomics);
             this.comics = rescomics.filter(rescomics => rescomics.description);
                        
           })
    
  }
  
  

  
}
