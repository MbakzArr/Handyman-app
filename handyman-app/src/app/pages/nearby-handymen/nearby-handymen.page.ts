import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-nearby-handymen',
  templateUrl: './nearby-handymen.page.html',
  styleUrls: ['./nearby-handymen.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class NearbyHandymenPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
