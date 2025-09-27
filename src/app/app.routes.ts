import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { NavBar } from './nav-bar/nav-bar';
import { MyProjects } from './my-projects/my-projects';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'Dashboard',
        pathMatch: 'full'
    },
    {
        path: 'Dashboard',
        component:Dashboard
    },
    {

        path:'navbar',
        component:NavBar
    },
    {
        path:'Projects',
        component:MyProjects
    }
];
