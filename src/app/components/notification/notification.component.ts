import { NotificationService } from './../../services/notification.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss'
})
export class NotificationComponent {

  notification!: string | null;

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.notificationService.getNotification().subscribe({
      next: (message) => {
        this.notification = message;
        setTimeout(() => this.notification = null, 2000)
      },
    });
  }
}
