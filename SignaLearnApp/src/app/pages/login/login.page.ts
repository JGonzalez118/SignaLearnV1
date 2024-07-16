import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { 
  arrowForwardOutline,
  bodyOutline,
  lockClosedOutline,
  mailOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
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
    IonButton
  ]
})
export class LoginPage implements OnInit {

  constructor() {
    addIcons({
      bodyOutline,
      lockClosedOutline,
      arrowForwardOutline,
      mailOutline
    });

    (window as any).login = this.login.bind(this);
  }
  ngOnInit() {
  }

  login() {
    // Obtener los valores de los inputs con comprobación de null y aserción de tipo
    const emailInput = document.getElementById('email') as HTMLInputElement | null;
    const passwordInput = document.getElementById('password') as HTMLInputElement | null;

    if (!emailInput || !passwordInput) {
        alert("Error al encontrar los campos del formulario.");
        return;
    }

    const email = emailInput.value;
    const password = passwordInput.value;

    // Verificar si los campos están vacíos
    if (email === "" || password === "") {
        alert("Por favor, complete todos los campos.");
        return;
    }

    // Verificar las credenciales
    if ((email === "admin@admin.com" && password === "admin123") || 
        (email === "pedro@gmail.com" && password === "pedro123")) {
        // Redirigir a la página de menú
        window.location.href = "/menu";
    } else {
        alert("Credenciales incorrectas.");
    }
}


}

