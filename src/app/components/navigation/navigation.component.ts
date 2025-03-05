import { Component } from '@angular/core';
import { Tooltip, initTWE } from 'tw-elements';
import { NavItem } from '../../models/navigation';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  navItems: NavItem[] = [
    {
      label: 'Home',
      icon: '../../../assets/icons/home.svg',
      route: '/'
    },
    {
      label: 'About Us',
      icon: '../../../assets/icons/navigation.svg',
      route: '/about-us'
    },
    {
      label: 'Contact',
      icon: '../../../assets/icons/navigation.svg',
      route: '/contact'
    },
    {
      label: 'Services',
      icon: '../../../assets/icons/navigation.svg',
      route: '/services'
    },
    {
      label: 'Team',
      icon: '../../../assets/icons/navigation.svg',
      route: '/team'
    },
  ];

  ngOnInit() {
    initTWE({ Tooltip });
  }
}
