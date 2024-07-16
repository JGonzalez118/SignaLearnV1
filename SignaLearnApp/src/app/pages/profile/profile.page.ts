import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonImg, IonItem, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
squareOutline,
checkbox,
arrowForwardOutline,
arrowBackOutline
} from 'ionicons/icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    CommonModule, 
    FormsModule,
    IonImg,
    IonItem,
    IonButton,
    IonIcon,
    IonButtons,
    RouterLink
  ]
})
export class ProfilePage implements OnInit {

  constructor() {

    addIcons({
      squareOutline,
      checkbox,
      arrowForwardOutline,
      arrowBackOutline
    });

  }

  ngOnInit() {
  }

}
