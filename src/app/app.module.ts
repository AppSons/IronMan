import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ComicsComponent } from './comics/comics.component';
import { AllCharactersComponent } from './all-characters/all-characters.component';

@NgModule({
  declarations: [
    AppComponent,
    ComicsComponent,
    AllCharactersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
