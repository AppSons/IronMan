import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comics, DetalleComics } from '../../interface';


import {  MarvelApiService } from '../../service/marvel-api.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComicsComponent implements OnInit {

  
  public infoUrls: any = [];
 
  constructor(private route: ActivatedRoute, 
              public marvelService: MarvelApiService ) {}

  ngOnInit(): void {
    
      this.cargarDetalle();
      
     
     
    }

    cargarDetalle() {
      this.route.params
      .subscribe(params => {
        console.log(params['id']);

        this.marvelService.getDetailComics(params['id'])
            .subscribe( (urlDetail: Comics) =>  {
              this.infoUrls =  urlDetail; 
  
        });
        
        
      }
      )
    }
    
    
    
    
}

  







