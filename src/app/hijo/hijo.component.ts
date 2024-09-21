import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
  nombre?: string;
  constructor(
    private _servicioFamiliar : ServicioFamiliarService
  ){

  }

  ngOnInit(): void {
      this._servicioFamiliar.setHermanoPeque('Pelon');
      this.nombre = this._servicioFamiliar.getHermanoPeque();
  }

  //Este mensaje se recibe desde el padre
  @Input () recibeHijo?: string;
  @Output() mensajeDesdeHijo = new EventEmitter<string>();
  @Output() incrementarDesdeHijo = new EventEmitter<void>();
  @Output() decrementarDesdeHijo = new EventEmitter<void>();
  mensaje: string = '';

  enviarMensaje(){
    this.mensajeDesdeHijo.emit(this.mensaje);
  }
  incrementar(){
    this.incrementarDesdeHijo.emit();
  }
  decrementar(){
    this.decrementarDesdeHijo.emit();
  }
}
