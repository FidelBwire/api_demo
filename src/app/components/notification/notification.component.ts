import { NotificationService } from './../../services/notification.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss'
})
export class NotificationComponent {

  notification!: string;

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.notificationService.getNotification().subscribe({
      next: (message) => {
        this.notification = message;
      },
    });
  }
}
