import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonCheckbox, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonList, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { 
  arrowForwardOutline,
  bodyOutline,
  lockClosedOutline,
  mailOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-prueba-alimentos',
  templateUrl: './prueba-alimentos.page.html',
  styleUrls: ['./prueba-alimentos.page.scss'],
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
    IonImg,
    IonCheckbox,
    IonList,
    IonButton
  ]
})
export class PruebaAlimentosPage implements OnInit {

  constructor() {
    addIcons({
      bodyOutline,
      lockClosedOutline,
      arrowForwardOutline,
      mailOutline
    });
  }

  ngOnInit() {
  }

    //logica para determinar las respuestas
    questions = [
      {
        options: [
          { text: 'Soda', correct: false },
          { text: 'Agua', correct: true },
          { text: 'Pan', correct: false }
        ],
        selectedIndex: null as number | null
      },
      {
        options: [
          { text: 'Leche', correct: false },
          { text: 'Queso', correct: false },
          { text: 'Café', correct: true }
        ],
        selectedIndex: null as number | null
      },
      {
        options: [
          { text: 'Arroz', correct: true },
          { text: 'Pasta', correct: false },
          { text: 'Sopa', correct: false }
        ],
        selectedIndex: null as number | null
      }
    ];
  
    selectOption(questionIndex: number, optionIndex: number) {
      if (this.questions[questionIndex].selectedIndex === null) {
        this.questions[questionIndex].selectedIndex = optionIndex;
      }
    }

}
