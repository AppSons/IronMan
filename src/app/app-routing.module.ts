import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ComicsComponent } from './pages/comics/comics.component';
import { DetailComicsComponent } from './pages/detail/detail.component';


const routes: Routes = [
    {path:'', redirectTo: '/comics', pathMatch: 'full'},
    //{path:'ironman',component: IronmanComponent},
    {path:'comics',component: ComicsComponent},
    {path:'detail/:id',component: DetailComicsComponent},
    
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }