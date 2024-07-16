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
  selector: 'app-prueba-uno',
  templateUrl: './prueba-uno.page.html',
  styleUrls: ['./prueba-uno.page.scss'],
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
    IonButton,
  ]
})

export class PruebaUnoPage implements OnInit {

  constructor() {
    addIcons({
      bodyOutline,
      lockClosedOutline,
      arrowForwardOutline,
      mailOutline
    });
  };

  ngOnInit() {
  }

    //logica para determinar las respuestas
    questions = [
      {
        options: [
          { text: 'O', correct: false },
          { text: 'A', correct: true },
          { text: 'I', correct: false }
        ],
        selectedIndex: null as number | null
      },
      {
        options: [
          { text: 'A', correct: false },
          { text: 'U', correct: false },
          { text: 'E', correct: true }
        ],
        selectedIndex: null as number | null
      },
      {
        options: [
          { text: 'I', correct: true },
          { text: 'O', correct: false },
          { text: 'E', correct: false }
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
