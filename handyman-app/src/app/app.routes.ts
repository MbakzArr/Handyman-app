import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'handymen/nearby',
    pathMatch: 'full',
  },
  {
    path: 'handymen/nearby',
    loadComponent: () => import('./pages/nearby-handymen/nearby-handymen.page').then( m => m.NearbyHandymenPage)
  },
  {
    path: 'handyman/:id',
    loadComponent: () => import('./pages/handyman-detail/handyman-detail.page').then( m => m.HandymanDetailPage)
  },
  {
    path: 'booking-form/:id',
    loadComponent: () => import('./pages/booking-form/booking-form.page').then(m => m.BookingFormPage)
  },  
  {
    path: 'admin/bookings',
    loadComponent: () => import('./admin-dashboard/admin-dashboard.page').then( m => m.AdminDashboardPage)
  },
];
