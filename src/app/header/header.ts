import { Component, EventEmitter, Output } from '@angular/core';
import { MatFormField, MatFormFieldModule, MatHint, MatLabel } from '@angular/material/form-field';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFooterCell } from '@angular/material/table';
import { UserSidebar } from '../user-sidebar/user-sidebar';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  @Output() userSidebarToggle = new EventEmitter<void>();
  
  currentPage:string=''

  constructor(private router:Router){

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        // e.g. '/projects' → 'projects'
        const segments = event.urlAfterRedirects.split('/').filter(Boolean);
        this.currentPage = segments.length ? segments[segments.length - 1] : 'home';
      });
  }
}