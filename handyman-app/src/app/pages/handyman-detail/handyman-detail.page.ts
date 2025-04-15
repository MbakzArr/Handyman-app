import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-handyman-detail',
  templateUrl: './handyman-detail.page.html',
  styleUrls: ['./handyman-detail.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class HandymanDetailPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
