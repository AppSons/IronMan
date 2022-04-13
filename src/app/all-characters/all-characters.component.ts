import { Component, OnInit } from '@angular/core';
import { MarvelApiService } from '../service/marvel-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-all-characters',
  templateUrl: './all-characters.component.html',
  styleUrls: ['./all-characters.component.css']
})
export class AllCharactersComponent implements OnInit {

  constructor( private marvelService: MarvelApiService) { }
  allCharacters!: Observable<any>;

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(){
    this.allCharacters = this.marvelService.getAllCharacters();
  }

}
