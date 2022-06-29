import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroInteractionComponent } from './hero-interaction/hero-interaction.component';

const routes: Routes = [
  {path:'heroes',component:HeroesComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'',redirectTo:'/dashboard',pathMatch:'full'},
  {path:'hero', children:[
    {path:'detail/:id',component:HeroInteractionComponent},
    {path:'new',component:HeroInteractionComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
