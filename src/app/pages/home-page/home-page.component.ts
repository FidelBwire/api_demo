import { Component } from '@angular/core';
import { ButtonEvent } from '../../models/button-event';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  buttonEventHandler(event: ButtonEvent) {
    alert('Button with label: ' + event.buttonLabel + ' has been clicked');
  }
}
