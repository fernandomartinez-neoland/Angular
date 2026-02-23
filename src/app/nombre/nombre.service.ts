import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NombreService {
  imprimirConsola(nombre:string){
    console.log(`mi nombre es ${nombre}`)
  }
}
