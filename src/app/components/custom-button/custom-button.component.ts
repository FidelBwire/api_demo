import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonEvent } from '../../models/button-event';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.scss',
})
export class CustomButtonComponent {
  @Input() label!: string; // Enable parent to pass values to the child

  @Output() onButtonPress = new EventEmitter<ButtonEvent>(); // Child component to pass values to the parent

  ngOnInit(): void {}

  buttonPress(label: string) {
    let obj: ButtonEvent = {
      buttonLabel: label,
    };
    this.onButtonPress.emit(obj);
  }
}
