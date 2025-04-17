import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonText
} from '@ionic/angular/standalone'; // 👈 bring in the needed components
import { RouterModule } from '@angular/router'; // 👈 for routerLink to work
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-nearby-handymen',
  templateUrl: './nearby-handymen.page.html',
  styleUrls: ['./nearby-handymen.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule, // 👈 for routerLink binding
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonList,
    IonItem,
    IonLabel,
    IonText
  ]
})
export class NearbyHandymenPage implements OnInit {
  handymen: any[] = [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    const lat = -25.75;
    const lng = 28.23;

    this.api.getNearbyHandymen(lat, lng).subscribe({
      next: (data) => {
        console.log('Handymen response:', data);
        this.handymen = data;
      },
      error: (err) => {
        console.error('Failed to load handymen:', err);
      }
    });
  }
}
