import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCharactersComponent } from './all-characters/all-characters.component';
import { ComicsComponent } from './comics/comics.component';

const routes: Routes = [
    {path:'', redirectTo: '/comics', pathMatch: 'full'},
    {path:'comics',component: ComicsComponent}
    
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }