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
  selector: 'app-prueba-palabras',
  templateUrl: './prueba-palabras.page.html',
  styleUrls: ['./prueba-palabras.page.scss'],
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
export class PruebaPalabrasPage implements OnInit {

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
          { text: 'Hola!', correct: false },
          { text: 'Perdón', correct: true },
          { text: 'Adios!', correct: false }
        ],
        selectedIndex: null as number | null
      },
      {
        options: [
          { text: 'Gracias', correct: true },
          { text: '¿Cómo estás?', correct: false },
          { text: 'Muy Bien', correct: false }
        ],
        selectedIndex: null as number | null
      },
      {
        options: [
          { text: 'Buenos días', correct: false },
          { text: 'Hasta Mañana', correct: false },
          { text: 'Por Favor', correct: true }
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
