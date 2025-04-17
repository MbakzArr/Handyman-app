import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ToastController, IonicModule } from '@ionic/angular';
import { ApiService } from '../../services/api.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking-form',
  standalone: true,
  templateUrl: './booking-form.page.html',
  styleUrls: ['./booking-form.page.scss'],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class BookingFormPage implements OnInit {
  handymanId: string = '';
  selectedDate: string = '';
  selectedTime: string = '';

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private toastController: ToastController,
    private router: Router
  ) {}

  ngOnInit() {
    this.handymanId = this.route.snapshot.paramMap.get('id')!;
  }

  async submitBooking() {
    if (!this.selectedDate || !this.selectedTime) {
      return this.presentToast('Please choose both date and time');
    }

    try {
      const datePart = new Date(this.selectedDate);
      const timePart = new Date(this.selectedTime);

      // Merge date and time into one ISO string
      const datetime = new Date(
        datePart.getFullYear(),
        datePart.getMonth(),
        datePart.getDate(),
        timePart.getHours(),
        timePart.getMinutes()
      ).toISOString();

      const payload = {
        handyman_id: this.handymanId,
        datetime,
        user_id: 1 // Replace with actual user ID
      };

      console.log('📤 Payload being sent:', payload);

      this.api.bookHandyman(payload).subscribe({
        next: () => {
          this.presentToast('Booking successful!');
          this.router.navigate(['/']);
        },
        error: () => this.presentToast('Booking failed. Please try again.')
      });
    } catch (err) {
      console.error('❌ Error creating datetime:', err);
      this.presentToast('Invalid date or time. Please try again.');
    }
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
