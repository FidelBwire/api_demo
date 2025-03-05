import { Component } from '@angular/core';
import { FooterNavigation } from '../../models/navigation';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  footerItems: FooterNavigation = {
    section1: [
      {
        icon: '../../../assets/icons/grid.svg',
        label: 'Home',
        route: '/',
      },
      {
        icon: '../../../assets/icons/grid.svg',
        label: 'About Us',
        route: '/',
      },
      {
        icon: '../../../assets/icons/grid.svg',
        label: 'Our Team',
        route: '/',
      },
    ],
    section2: [
      {
        icon: '../../../assets/icons/grid.svg',
        label: 'About Us',
        route: '/',
      },
      {
        icon: '../../../assets/icons/grid.svg',
        label: 'Our Team',
        route: '/',
      },
    ],
    section3: [
      {
        icon: '../../../assets/icons/grid.svg',
        label: 'About Us',
        route: '/',
      },
    ],
  };
}
