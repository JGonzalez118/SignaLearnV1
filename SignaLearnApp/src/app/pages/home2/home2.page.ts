import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.page.html',
  styleUrls: ['./home2.page.scss'],
  standalone: true,
  imports: [ CommonModule, FormsModule,IonicModule]
})
export class Home2Page{
    constructor(private router: Router) { }
  
    ngOnInit() {
      // Navegar automáticamente a 'page2' después de 3 segundos
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 3000);
    }
}