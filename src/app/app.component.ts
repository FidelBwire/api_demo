import { Component } from '@angular/core';
import { SiService } from './services/si.service';
import { Si } from './models/si';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'APIDEMO';

  constructor(private siService: SiService) { }

  ngOnInit() {
    this.getSis();
  }

  private getSis(): void {
    this.siService.fetchSi().subscribe({
      next: (response) => {
        let responseItems: Si[] | null = response.body;

        if (responseItems != null) {
          responseItems.forEach((item) => {
            console.log(item.code)
          })
        }
      }
    })
  }
}
