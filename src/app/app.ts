import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NombreComponent } from './nombre/nombre.component';
import { NombreService } from './nombre/nombre.service';
import axios from 'axios';
interface Usuario {
  _id: string;
  nombre: string;
  correo: string;
  direccion: string;
  password: string;
}

@Component({
  selector: 'app-root',
  imports: [FormsModule, NombreComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  constructor(private nombre_Servicio: NombreService) {}

  // variables
  title = signal('Angular');
  input = signal('');

  // Pon esto, con la interfaz del objeto

  peticion = signal<Usuario[]>([]);

  // metodo
  newTitle($event: string) {
    this.input.set($event);
  }
  changeTitle() {
    if (this.input()) {
      // console.log(this.input);
      this.nombre_Servicio.imprimirConsola(this.input());
      this.title.set(this.input());
    }

    // aqui conectamos con el backend a modo prueba

    let data = '';

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:3000/api/finduser',
      headers: {},
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        this.peticion.set(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
