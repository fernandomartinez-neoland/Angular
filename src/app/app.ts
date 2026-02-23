import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NombreComponent } from './nombre/nombre.component';
import { NombreService } from './nombre/nombre.service';

@Component({
  selector: 'app-root',
  imports: [FormsModule, NombreComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  constructor(private nombre_Servicio:NombreService){}
  title = signal('Anguladasdasdasdrrrrr');
  input = signal('');
  newTitle($event: string) {
    this.input.set($event);
  }
  changeTitle() {
    if (this.input()) {
      // console.log(this.input);
      this.nombre_Servicio.imprimirConsola(this.input())
      this.title.set(this.input());
    }
  }
}
