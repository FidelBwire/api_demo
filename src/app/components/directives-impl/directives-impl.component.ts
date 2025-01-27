import { Component } from '@angular/core';
import { Staff } from '../../models/staff';

@Component({
  selector: 'app-directives-impl',
  templateUrl: './directives-impl.component.html',
  styleUrl: './directives-impl.component.scss',
})
export class DirectivesImplComponent {
  protected staff: Staff[] = [
    {
      name: 'John Doe',
      gender: 'Male',
    },
    {
      name: 'Esther',
      gender: 'Female',
    },
    {
      name: 'Tom Cruz',
      gender: 'Male',
    },
  ];

  protected isSuccessful: boolean = true;
  protected isLoading: boolean = false;

  protected language: string = 'Norwegian';

  showAlert() {
    alert('Button is clicked');
 }
}
