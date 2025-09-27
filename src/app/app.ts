import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from "./nav-bar/nav-bar";
import { Header } from "./header/header";
import { UserSidebar } from './user-sidebar/user-sidebar';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar, Header,UserSidebar,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'my-portfolio';

   sidebarOpen = false;
}
