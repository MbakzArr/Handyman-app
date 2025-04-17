import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonCardHeader, IonCardTitle, IonCard, IonCardContent, IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.page.html',
  styleUrls: ['./admin-dashboard.page.scss'],
  standalone: true,
  imports: [IonCardTitle, IonCardHeader, IonCardContent, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonItem, IonLabel]
})
export class AdminDashboardPage implements OnInit {
  bookings: any[] = [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getAllBookings().subscribe({
      next: (data: any) => {
        console.log('Bookings from API:', data); // 👈 log here
        this.bookings = data;
      },
      error: (err: any) => console.error('Failed to load bookings:', err)
    });
  }
  
}
