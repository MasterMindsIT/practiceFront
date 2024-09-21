import { Component, OnInit } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit{

  constructor(
    private _servicioFamiliar : ServicioFamiliarService
  ){

  }
  nombre?: string;
  ngOnInit(): void {
      this._servicioFamiliar.setHermanoGrande('Fernando');
      this.nombre = this._servicioFamiliar.getHermanoGrande();
  }
  saludar(){
    this._servicioFamiliar.saludar(this._servicioFamiliar.getHermanoPeque()||'');
  }
  preguntar(){
    console.log(this._servicioFamiliar.preguntarPorHijo());
  }

  mensajePadre: string="Mensaje desde el padre";
  reciboMensaje: string = '';
  recibirMensaje($event: string){
    this.reciboMensaje = $event;
  }
  valorContadorPadre:number = 0;
  incrementar(){
  this.valorContadorPadre++;
}
decrementar(){
  this.valorContadorPadre--;
}
}
