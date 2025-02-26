import { Component } from '@angular/core';
import { Tooltip, initTWE } from 'tw-elements';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  ngOnInit() {
    initTWE({ Tooltip });
  }
}
