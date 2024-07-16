import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonMenu, IonMenuButton, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-leccion2.1',
  templateUrl: './leccion2.1.page.html',
  styleUrls: ['./leccion2.1.page.scss'],
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
export class Leccion21Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
