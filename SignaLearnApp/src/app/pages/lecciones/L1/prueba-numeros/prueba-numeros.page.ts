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
  selector: 'app-prueba-numeros',
  templateUrl: './prueba-numeros.page.html',
  styleUrls: ['./prueba-numeros.page.scss'],
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
export class PruebaNumerosPage implements OnInit {

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
          { text: '1', correct: false },
          { text: '5', correct: false },
          { text: '4', correct: true }
        ],
        selectedIndex: null as number | null
      },
      {
        options: [
          { text: '7', correct: false },
          { text: '8', correct: true },
          { text: '2', correct: false }
        ],
        selectedIndex: null as number | null
      },
      {
        options: [
          { text: '2', correct: false },
          { text: '3', correct: true },
          { text: '1', correct: false }
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
