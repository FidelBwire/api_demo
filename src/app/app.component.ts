import { Component } from '@angular/core';
import { SiService } from './services/si.service';
import { Si, SiSearchParameters } from './models/si';
import { Pagination } from './models/pagination';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from './services/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'APIDEMO';

  siResponse: Si[] = [];
  pagination!: Pagination;

  protected pageSize = new FormControl<number | null>(null, [
    Validators.required,
    Validators.max(50),
    Validators.min(1),
  ]);
  protected pageNumber = new FormControl<number | null>(null, [
    Validators.required,
    Validators.min(1),
  ]);
  protected code = new FormControl<string>('', [Validators.maxLength(30)]);
  protected description = new FormControl<string>('', [
    Validators.maxLength(30),
  ]);

  protected email = new FormControl<string>('', [
    Validators.required,
    Validators.email,
    Validators.maxLength(150),
    Validators.pattern(/^[a-zA-Z]+\.[a-zA-Z]+@futuresoft7\.com$/),
  ]);
  protected phone = new FormControl<string>('', [
    Validators.required,
    Validators.email,
    Validators.maxLength(150),
    Validators.pattern(/^(07\d{8}|(\+2547\d{8}))$/),
  ]);
  protected password = new FormControl<string>('', [
    Validators.required,
    Validators.maxLength(30),
    Validators.maxLength(10),
    Validators.minLength(6),
  ]);

  protected demoForm: FormGroup = new FormGroup({
    pageSize: this.pageSize,
    pageNumber: this.pageNumber,
    code: this.code,
    description: this.description,
  });

  protected signInForm = new FormGroup({
    email: this.email,
    password: this.password,
  });

  siFetchSubscription!: Subscription;

  constructor(
    private siService: SiService,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {}

  ngOnDestroy(): void {
    this.siFetchSubscription?.unsubscribe(); // Conditional call to unsubscribe => unsubscribe will only be called if siFetchSubscription is not null
  }

  private getSis(parameters: SiSearchParameters): void {
    this.siFetchSubscription = this.siService.fetchSi(parameters).subscribe({
      next: (response) => {
        // Executed upon successfull API request
        let responseItems: Si[] | null = response.body; // Get the response body

        const paginationHeader = response.headers.get('x-pagination'); // Get the response header

        if (paginationHeader) {
          // To confirm that pagination is not null
          console.log('Header: ' + paginationHeader);

          let paginationData = JSON.parse(paginationHeader); // To convert JSON string to an object

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
      error: (error) => {
        // Executed in case of an error
        this.notificationService.showNotification('Unable to fetch data');
      },
      complete() {
        // Will always be executed whether API call is successful or not
        console.log('Complete');
      },
    });
  }

  protected fetchData(): void {
    if (this.demoForm.invalid) {
      Object.keys(this.demoForm.controls).forEach((key) => {
        const controlErrors = this.demoForm.get(key)?.errors;

        if (controlErrors != null) {
          Object.keys(controlErrors).forEach((keyError) => {
            console.log(
              `${key}: Validation='${keyError}': is valid: ${!controlErrors[
                keyError
              ]}`
            );
          });
        }
      });
    } else {
      var formData = this.demoForm.value;

      let params: SiSearchParameters = {
        PageNumber: formData.pageNumber,
        PageSize: formData.pageSize,
        Description: formData.description,
        Code: formData.code,
      };

      this.getSis(params);
    }
  }
}
