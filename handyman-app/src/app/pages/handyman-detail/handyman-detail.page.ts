import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import * as L from 'leaflet';
import { FormsModule } from '@angular/forms';
import { ToastController, IonicModule } from '@ionic/angular';

import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-handyman-detail',
  standalone: true,
  templateUrl: './handyman-detail.page.html',
  styleUrls: ['./handyman-detail.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule // ✅ Needed for [routerLink]
  ]
})
export class HandymanDetailPage implements OnInit {
  handymanId!: string;
  handyman: any;
  selectedDateTime: string = '';

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.handymanId = this.route.snapshot.paramMap.get('id')!;
    this.api.getHandymanById(this.handymanId).subscribe({
      next: (data) => {
        this.handyman = data;
        this.loadMap();
      },
      error: (err) => console.error('Failed to load handyman details:', err)
    });
  }

  async bookHandyman() {
    if (!this.selectedDateTime) {
      this.presentToast('Please select a date and time to book.');
      return;
    }

    const payload = {
      handyman_id: this.handyman.id,
      datetime: this.selectedDateTime,
      user_id: 1 // Replace with actual user ID
    };

    this.api.bookHandyman(payload).subscribe({
      next: () => this.presentToast('Booking successful!'),
      error: () => this.presentToast('Booking failed. Please try again.')
    });
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'bottom'
    });
    await toast.present();
  }

  loadMap() {
    const lat = this.handyman.user.lat;
    const lng = this.handyman.user.lng;

    setTimeout(() => {
      const map = L.map('map').setView([lat, lng], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(map);

      L.marker([lat, lng])
        .addTo(map)
        .bindPopup(this.handyman.user.name)
        .openPopup();

      setTimeout(() => {
        map.invalidateSize();
      }, 200);
    }, 100);
  }
}
