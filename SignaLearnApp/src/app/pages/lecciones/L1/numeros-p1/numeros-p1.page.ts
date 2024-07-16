import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonMenu, IonMenuButton, IonTitle, IonToolbar, IonBackButton } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { 
  arrowForwardOutline,
  arrowBackOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-numeros-p1',
  templateUrl: './numeros-p1.page.html',
  styleUrls: ['./numeros-p1.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    CommonModule, 
    FormsModule, 
    IonCard, 
    IonCardContent, 
    IonButton,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    RouterLink,
    IonMenu,
    IonMenuButton,
    IonButtons,
    IonIcon,
    IonBackButton
  ]
})
export class NumerosP1Page implements OnInit {

  constructor() {
    addIcons({
      arrowForwardOutline,
      arrowBackOutline
    });
  }

  ngOnInit() {
  }

}
