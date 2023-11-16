import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    title: 'Home',
    loadComponent: () =>
      import('./core/components/home/home.component').then(
        (m) => m.HomeComponent
      ),
  },
  {
    path: 'list',
    title: 'Lists',
    children: [
      {
        path: 'lists',
        title: 'Lists',
        loadComponent: () =>
          import('./list/components/lists/lists.component').then(
            (m) => m.ListsComponent
          ),
      },
      {
        path: '',
        title: 'List',
        loadComponent: () =>
          import('./list/components/list/list.component').then(
            (m) => m.ListComponent
          ),
      },
    ],
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '**',
    title: 'Page Not Found',
    loadComponent: () =>
      import('./core/components/not-found/not-found.component').then(
        (m) => m.NotFoundComponent
      ),
  },
];
