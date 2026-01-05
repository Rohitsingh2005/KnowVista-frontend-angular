import { Component } from '@angular/core';
import { NavbarLink, navbarLinks } from './entities/entities';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {

  protected readonly navbarLinks: NavbarLink[] = navbarLinks;

}
