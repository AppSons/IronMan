import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarvelApiService } from '../../service/marvel-api.service';

import { Comics } from '../../interface';


@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  public cargando: boolean = true;
  public comic : Comics [] = [];
  

  constructor( public marvelService: MarvelApiService) { }
   

  ngOnInit(): void {

    this.cargarComics();
    
    
  }
  cargarComics() {
    this.marvelService.getComics()
           .subscribe( res => {
             this.cargando = false;
             console.log(res);
             this.comic = res;
             
           });
    
  }
  

  
}
