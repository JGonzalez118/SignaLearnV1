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
  selector: 'app-prueba-colores',
  templateUrl: './prueba-colores.page.html',
  styleUrls: ['./prueba-colores.page.scss'],
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
export class PruebaColoresPage implements OnInit {

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
      //Amarillo
      options: [
        { text: 'Gris', correct: false },
        { text: 'Rojo', correct: false },
        { text: 'Amarillo', correct: true}
      ],
      selectedIndex: null as number | null
    },

    //Morado
    {
      options: [
        { text: 'Morado', correct: true },
        { text: 'Verde', correct: false },
        { text: 'Celeste', correct: false }
      ],
      selectedIndex: null as number | null
    },

    //Violeta
    {
      options: [
        { text: 'Amarillo', correct: false },
        { text: 'Blanco', correct: false },
        { text: 'Violeta', correct: true }
      ],
      selectedIndex: null as number | null
    },

    //Rojo
    {
      options: [
        { text: 'Rojo', correct: true },
        { text: 'Chocolate', correct: false },
        { text: 'Blanco', correct: false }
      ],
      selectedIndex: null as number | null
    },

    //Celeste
    {
      options: [
        { text: 'Blanco', correct: false },
        { text: 'Celeste', correct: true },
        { text: 'Naranja', correct: false }
      ],
      selectedIndex: null as number | null
    },

    //Verde
    {
      options: [
        { text: 'Morado', correct: false },
        { text: 'Verde', correct: true },
        { text: 'Rosado', correct: false }
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
