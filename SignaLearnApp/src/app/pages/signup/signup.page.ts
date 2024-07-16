import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { 
  accessibilityOutline,
  arrowForwardOutline,
  bodyOutline,
  lockClosedOutline,
  mailOutline,
  personOutline,
  transgenderOutline
} from 'ionicons/icons';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: true,
  imports: [
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    CommonModule, 
    FormsModule,
    IonIcon,
    IonInput,
    IonItem,
    RouterLink,
    IonFab,
    IonFabButton,
    IonButton,
    IonImg
  ],
})
export class SignupPage implements OnInit {

  constructor() {
    addIcons({
      bodyOutline,
      lockClosedOutline,
      arrowForwardOutline,
      personOutline,
      mailOutline,
      accessibilityOutline,
      transgenderOutline
    });
  }

  ngOnInit() {
  }

}
