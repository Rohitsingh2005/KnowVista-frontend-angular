import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home';
import { Navbar } from '../../layout/navbar/navbar';
import { Footer } from '../../layout/footer/footer';
import { Board } from "../board/board";
import { Teams } from '../teams/teams';
import { Community } from '../community/community';
import { MeetUp } from '../meet-up/meet-up';

const routes: Routes = [
  {
    path: '',
    component: Home
  }
];

@NgModule({
  declarations: [
    Home,
    Navbar,
    Footer,
    Board,
    Teams,
    Community,
    MeetUp
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
]
})
export class HomeModule { }
