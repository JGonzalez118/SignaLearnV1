import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-leccion3.1',
  templateUrl: './leccion3.1.page.html',
  styleUrls: ['./leccion3.1.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink, IonButton]
})
export class Leccion31Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
