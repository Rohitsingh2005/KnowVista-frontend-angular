import { Component } from '@angular/core';
import { NavbarLink, navbarLinks } from '../../shared/entities/entities';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {

  protected readonly navbarLinks: NavbarLink[] = navbarLinks;

}
