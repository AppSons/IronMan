import { Component, OnInit } from '@angular/core';
import { MarvelApiService } from '../service/marvel-api.service';

import { Comics } from '../interface/comics';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  comic : Comics [] = [];

  constructor( private marvelService: MarvelApiService) { }
   

  ngOnInit(): void {

    this.marvelService.getComics()
      .subscribe( res => {
      console.log(res);
        this.comic = res;
      });
    
  }

  
}
