import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonCheckbox, IonFab,IonFabButton, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonList, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { RouterLink} from '@angular/router';
import { addIcons } from 'ionicons';
import { 
  arrowForwardOutline,
  bodyOutline,
  lockClosedOutline,
  mailOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-prueba-dias-semana',
  templateUrl: './prueba-dias-semana.page.html',
  styleUrls: ['./prueba-dias-semana.page.scss'],
  standalone: true,
  imports: [IonContent, 
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
    IonButton]
})
export class PruebaDiasSemanaPage implements OnInit {

  constructor() { 

  
    addIcons({
      bodyOutline,
      lockClosedOutline,
      arrowForwardOutline,
      mailOutline
    })
  }

  ngOnInit() {
  }
  //logica para determinar las respuestas
  questions = [
    {
      //Lunes
      options: [
        { text: 'Jueves', correct: false },
        { text: 'Lunes', correct: true },
        { text: 'Sábado', correct: false}
      ],
      selectedIndex: null as number | null
    },

    //Martes
    {
      options: [
        { text: 'Lunes', correct: false},
        { text: 'Martes', correct: true },
        { text: 'Domingo', correct: false }
      ],
      selectedIndex: null as number | null
    },

    //Miercoles
    {
      options: [
        { text: 'Miercoles', correct: true },
        { text: 'Viernes', correct: false },
        { text: 'Jueves', correct: false}
      ],
      selectedIndex: null as number | null
    },

    //Jueves
    {
      options: [
        { text: 'Lunes', correct: false },
        { text: 'Martes', correct: false },
        { text: 'Jueves', correct: true }
      ],
      selectedIndex: null as number | null
    },

    //Viernes
    {
      options: [
        { text: 'Miercoles', correct: false },
        { text: 'Viernes', correct: true },
        { text: 'Jueves', correct: false }
      ],
      selectedIndex: null as number | null
    },

    //Sábado
    {
      options: [
        { text: 'Domingo', correct: false },
        { text: 'Lunes', correct: false},
        { text: 'Sábado', correct: true }
      ],
      selectedIndex: null as number | null
    },

    //Domingo
    {
      options: [
        { text: 'Martes', correct: false },
        { text: 'Jueves', correct: false },
        { text: 'Domingo', correct: true }
      ],
      selectedIndex: null as number | null
    },

  ];

  selectOption(questionIndex: number, optionIndex: number) {
    if (this.questions[questionIndex].selectedIndex === null) {
      this.questions[questionIndex].selectedIndex = optionIndex;
    }
  }
}
