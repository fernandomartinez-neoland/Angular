import { Component } from '@angular/core';
import {NombreService} from './nombre.service'

@Component({
  selector: 'nombre',
  imports: [],
  templateUrl: './nombre.component.html',
  styleUrl: './nombre.component.css',
})
export class NombreComponent {
  constructor(private nombreServicio:NombreService){
    this.nombreServicio.imprimirConsola('Fernando');
  }

}
