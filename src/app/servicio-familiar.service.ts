import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioFamiliarService {
hermanoGrande?: string;
hermanoPeque?: string;

getHermanoGrande():string {
  return this.hermanoGrande || '';
}
setHermanoGrande(hermano:string){
  this.hermanoGrande = hermano;
}

getHermanoPeque():string{
  return this.hermanoPeque || '';
}

setHermanoPeque(hermano: string){
  this.hermanoPeque=hermano;
}

saludar(hermano: string){
  console.log(`Hola hermano: ${hermano}`);
}

preguntarPorHijo():string{
  return 'Como esta tu hijo?';
}
  constructor() { }
}
