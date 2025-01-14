import { Component } from '@angular/core';
import { SiService } from './services/si.service';
import { Si, SiSearchParameters } from './models/si';
import { Pagination } from './models/pagination';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'APIDEMO';

  siResponse: Si[] = [];
  pagination!: Pagination;

  siFetchSubscription!: Subscription;

  constructor(private siService: SiService) { }

  ngOnInit() {
    this.getSis();
  }

  ngOnDestroy(): void {
    this.siFetchSubscription?.unsubscribe(); // Conditional call to unsubscribe => unsubscribe will only be called if siFetchSubscription is not null
  }

  private getSis(): void {
    let param: SiSearchParameters = {
      PageNumber: 1,
      PageSize: 2,
      Code: '120',
      Description: 'P'
    }

    this.siFetchSubscription = this.siService.fetchSi(param).subscribe({
      next: (response) => {
        let responseItems: Si[] | null = response.body; // Get the response body

        const paginationHeader = response.headers.get('x-pagination'); // Get the response header

        if (paginationHeader) {
          // To confirm that pagination is not null
          console.log('Header: ' + paginationHeader);

          let paginationData = JSON.parse(paginationHeader);

          this.pagination = {
            CurrentPage: paginationData.CurrentPage,
            TotalPages: paginationData.TotalPages,
            PageSize: paginationData.PageSize,
            TotalCount: paginationData.TotalCount,
            HasPrevious: paginationData.HasPrevious,
            HasNext: paginationData.HasNext,
          };
        }

        if (responseItems != null) {
          // responseItems.forEach((item) => {
          //   console.log(item.code + " => " + item.description)
          // });

          this.siResponse = responseItems;
        }
      },
    });
  }
}
