import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { 
  arrowForwardOutline,
  arrowBackOutline,
} from 'ionicons/icons';


@Component({
  selector: 'app-numeros-p2',
  templateUrl: './numeros-p2.page.html',
  styleUrls: ['./numeros-p2.page.scss'],
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
    IonButtons,
    IonIcon,

  ]
})
export class NumerosP2Page implements OnInit {

  constructor() {
    addIcons({
      arrowForwardOutline,
      arrowBackOutline
    });
  }

  ngOnInit() {
  }

}
