import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-sidebar',
  imports: [],
  templateUrl: './user-sidebar.html',
  styleUrl: './user-sidebar.css'
})
export class UserSidebar {


  @Output() closeSidebar = new EventEmitter<void>();
}
  