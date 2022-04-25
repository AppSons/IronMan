
import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MarvelApiService } from './marvel-api.service';
import { HttpClientModule } from '@angular/common/http';

describe('MarvelApiService', () => {
  let service: MarvelApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule, HttpClientTestingModule ], 
    providers: [MarvelApiService]
    });
    service = TestBed.inject(MarvelApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
