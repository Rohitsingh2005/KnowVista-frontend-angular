import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./feature/home/home-module').then(m => m.HomeModule)
  },
  {
    path:'login' , component:Login
  },
  {
    path:'register',
    component:Register
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
