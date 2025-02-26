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
    },
    {
      label: 'About Us',
      icon: '../../../assets/icons/navigation.svg',
    },
    {
      label: 'Contact',
      icon: '../../../assets/icons/navigation.svg',
    },
    {
      label: 'Services',
      icon: '../../../assets/icons/navigation.svg',
    },
    {
      label: 'Team',
      icon: '../../../assets/icons/navigation.svg',
    },
  ];

  ngOnInit() {
    initTWE({ Tooltip });
  }
}
