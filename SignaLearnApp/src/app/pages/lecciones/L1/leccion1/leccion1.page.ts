import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-leccion1',
  templateUrl: './leccion1.page.html',
  styleUrls: ['./leccion1.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink, IonButton, IonMenuButton, IonButtons, IonMenu]
})
export class Leccion1Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
