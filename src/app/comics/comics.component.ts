import { Component, OnInit } from '@angular/core';
import { MarvelApiService } from '../service/marvel-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  constructor( private marvelService: MarvelApiService) { }
  allComics!: Observable<any>;

  ngOnInit(): void {
    this.getComics();
  }

  getComics(){
    this.allComics = this.marvelService.getAllComics();
  }
}
