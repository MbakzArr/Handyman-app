import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  IonItem,
  IonLabel
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms'; // add this to the imports
import { ToastController } from '@ionic/angular';

import { IonButton, IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/angular/standalone';
import { ApiService } from '../../services/api.service';
imports: [
  CommonModule,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonButton
]

@Component({
  selector: 'app-handyman-detail',
  templateUrl: './handyman-detail.page.html',
  styleUrls: ['./handyman-detail.page.scss'],
  standalone: true,
  imports: [IonButton, FormsModule, IonItem, IonLabel, IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, CommonModule]
})
export class HandymanDetailPage implements OnInit {
  handymanId!: string;
  handyman: any;
  selectedDateTime: string = '';

  constructor(private route: ActivatedRoute, private api: ApiService, private toastController: ToastController) {}

  ngOnInit() {
    this.handymanId = this.route.snapshot.paramMap.get('id')!;
    this.api.getHandymanById(this.handymanId).subscribe({
      next: (data) => this.handyman = data,
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
      user_id: 1 // Replace with the real logged-in user ID
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
}