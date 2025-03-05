import { Component, Input } from '@angular/core';
import { FooterItem } from '../../../models/navigation';

@Component({
  selector: 'app-footer-section',
  templateUrl: './footer-section.component.html',
  styleUrl: './footer-section.component.scss'
})
export class FooterSectionComponent {

  @Input() section: FooterItem[] = [];
}
