import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';  // This enables Ionic components
import { RouterModule } from '@angular/router';

import { NearbyHandymenPage } from './nearby-handymen.page';  // Your page component

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,  // Make sure to import IonicModule
    RouterModule.forChild([  // This sets up the route for the page
      {
        path: '',
        component: NearbyHandymenPage,  // The component displayed when the route is hit
      },
    ]),
  ],
  declarations: [NearbyHandymenPage],  // Declare your page component here
})
export class NearbyHandymenPageModule {}  // Module definition for the page
