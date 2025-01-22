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
      gender: 'Male'
    },
    {
      name: 'Esther',
      gender: 'Female'
    },
    {
      name: 'Tom Cruz',
      gender: 'Male'
    }
  ];

  protected isSuccessful: boolean = false;
  protected isLoading: boolean = true;
}
