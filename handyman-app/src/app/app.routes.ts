import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'nearby-handymen',
    loadComponent: () => import('./pages/nearby-handymen/nearby-handymen.page').then( m => m.NearbyHandymenPage)
  },
  {
    path: 'handyman-detail',
    loadComponent: () => import('./pages/handyman-detail/handyman-detail.page').then( m => m.HandymanDetailPage)
  },
  {
    path: 'booking-form',
    loadComponent: () => import('./pages/booking-form/booking-form.page').then( m => m.BookingFormPage)
  },
];
