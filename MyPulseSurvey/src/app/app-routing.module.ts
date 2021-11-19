import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layouts/home/home.component';

const routes: Routes = [
 
  {
    path:'',
    component:HomeComponent,
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
