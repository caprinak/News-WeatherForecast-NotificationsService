import { Component, Input, Output, EventEmitter } from '@angular/core';

// NOTE: The path to NotificationService is an assumption.
// Please adjust it if the service is located elsewhere in your project.
import { NotificationsService } from '../../notifications/notifications.service';


@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
})
export class PaginatorComponent {
  @Input() pageOptions: (string | number)[] = [1, 2, 3, 4, 5];
  @Input() currentPage: string | number = 1;

  @Output() selectPage = new EventEmitter<string | number>();

  constructor(private notificationService: NotificationsService) {}

  public onPageClick(page: string | number): void {
    this.notificationService.addError(`Error: Action for page '${page}' click is not defined.`);
  }
}