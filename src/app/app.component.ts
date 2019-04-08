import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
  'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S',
  'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  palabra = 'Mango'; // Quiero que este STRING sea introducido por el usuario o, en su defecto, que salga aleatoriamente desde un arreglo.
  palabraOculta = '';
  intentos = 0;
  ganar = false;
  perder = false;

  constructor() {
    this.palabra = this.palabra.toUpperCase();
    this.palabraOculta = '_ '.repeat(this.palabra.length); // for (let i = 0; this.palabraOculta.length < this.palabra.length; i++) { this.palabraOculta = this.palabraOculta +  '_';}
  }

  comprobar(letra) {
    this.verficarGane();
    this.existeLetra(letra);
    const palabraOcultaArreglo = this.palabraOculta.split(' ');
    for (let i = 0; i < this.palabra.length; i++) {
      if (this.palabra[i] === letra) {
        palabraOcultaArreglo[i] = letra;
      }
    }
    this.palabraOculta = palabraOcultaArreglo.join(' ');
    this.verficarGane();
  }

  existeLetra(letra) {
    if (this.palabra.indexOf(letra) >= 0) {
    } else {
      this.intentos++;
    }
  }

  verficarGane() {
    const palabraArr = this.palabraOculta.split(' ');
    const palabraEvaluar = palabraArr.join('');
    if (palabraEvaluar === this.palabra) {
      this.ganar = true;
    }
    if (this.intentos >= 9) {
      this.perder = true;

    }
  }
}
