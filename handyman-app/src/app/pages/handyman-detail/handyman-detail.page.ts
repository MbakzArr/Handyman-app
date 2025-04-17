import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  IonItem,
  IonLabel
} from '@ionic/angular/standalone';

import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/angular/standalone';
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
  IonLabel
]

@Component({
  selector: 'app-handyman-detail',
  templateUrl: './handyman-detail.page.html',
  styleUrls: ['./handyman-detail.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, CommonModule]
})
export class HandymanDetailPage implements OnInit {
  handymanId!: string;
  handyman: any;

  constructor(private route: ActivatedRoute, private api: ApiService) {}

  ngOnInit() {
    this.handymanId = this.route.snapshot.paramMap.get('id')!;
    console.log("Fetching handyman details for ID:", this.handymanId);
  
    this.api.getHandymanById(this.handymanId).subscribe({
      next: (data) => {
        console.log("Handyman data:", data);  // Log the response data to ensure it's being fetched correctly
        this.handyman = data;
      },
      error: (err) => {
        console.error('Failed to load handyman details:', err);
      }
    });
  }
  
  
}
