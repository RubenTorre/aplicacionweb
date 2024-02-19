import { Component } from '@angular/core';
import { ServiciosComponent } from 'src/app/servicios/servicios.component';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class AppMenuComponent {

  agente: string;
  codigoInicio: string;
  codigoFin: string;
  selectedAgente: number | null;
  agentesList: any[];
  ngOnInit() {
    this.serviciosComponent.getAgenteList()
      .subscribe(
        agentes => this.agentesList = agentes,
        error => console.error(error)
      );
  }

  

  constructor(private serviciosComponent: ServiciosComponent) {}

  asignarDatos(nombreAgente: string) {
    this.agente = nombreAgente;
  }

  asignarLibretin(idAgente: number | null, codigoInicio: string, codigoFin: string): void {
    if (idAgente !== null) {
      this.serviciosComponent.asignarLibretin(idAgente, codigoInicio, codigoFin)
        .subscribe(
          response => {
            // Maneja la respuesta aquí si es necesario
            console.log(response);
            Swal.fire('Asignación Exitosa', 'La asignación se realizó correctamente', 'success');
            this.limpiarCampos();
          },
          error => {
            console.error(error);
          }
        );
    }
  }

  cancelar(): void {
    Swal.fire('Cancelar', 'La asignación se cancelo', 'error');

    this.limpiarCampos();
  }

  private limpiarCampos(): void {
    this.selectedAgente = null;
    this.codigoInicio = '';
    this.codigoFin = '';
  }

  
 
}
