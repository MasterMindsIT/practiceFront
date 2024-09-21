import { Component, inject, OnInit } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-hermano',
  templateUrl: './hermano.component.html',
  styleUrls: ['./hermano.component.css']
})
export class HermanoComponent implements OnInit {
  nombre?: string;
  //otra forma de injectar el servicio es:
  private _serviceFamiliar2 =  inject(ServicioFamiliarService);
  constructor(
    private _servicioFamiliar : ServicioFamiliarService
  ){

  }
  ngOnInit(): void {
      this._servicioFamiliar.setHermanoPeque('Pelon');
      this.nombre = this._servicioFamiliar.getHermanoPeque();
  }
  saludar(){
    this._servicioFamiliar.saludar(this._servicioFamiliar.getHermanoGrande()||'');
  }
  preguntar(){
    console.log(this._servicioFamiliar.preguntarPorHijo());
  }

}
