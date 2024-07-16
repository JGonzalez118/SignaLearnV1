import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})

export class HomePage {
  constructor(private router: Router) { }

  ngOnInit() {
    // Navegar automáticamente a 'page2' después de 3 segundos
    setTimeout(() => {
      this.router.navigate(['home2']);
    }, 3000);
  }

}