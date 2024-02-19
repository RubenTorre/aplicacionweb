import { Component, OnInit } from '@angular/core';

import { ServiciosComponent } from 'src/app/servicios/servicios.component';

import pdfMake from 'pdfmake/build/pdfMake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import Swal from 'sweetalert2';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html'
})
export class AppIconsComponent implements OnInit {

  fechaActual: string = '';
  codigo: string;
  idagente:string;
  agente: string;
  codigoInicio: string;
  codigoFin: string;
  selectedAgente: number | null;
  agentesList: any[];
  ObjectPDF:any;
  
  ngOnInit() {
    this.serviciosComponent.getAgenteList()
      .subscribe(
        agentes => this.agentesList = agentes,
        error => console.error(error)
      );

    this.mostrarFechaActual(); // Llama a la función para mostrar la fecha actual
    setInterval(() => {
      this.mostrarFechaActual(); // Llama a la función cada segundo para actualizar la fecha actual
    }, 1000);
  }

  constructor(private serviciosComponent: ServiciosComponent) { }

  // Función para mostrar la fecha actual
  mostrarFechaActual() {
    const fechaActual = new Date();
    const opciones = { year: 'numeric', month: 'long', day: 'numeric' } as const;
    this.fechaActual = fechaActual.toLocaleDateString('es-ES', opciones);
  }
  
  

 /* createPdf() {
    if (!this.codigo || !this.selectedAgente) {
      Swal.fire({
        title: 'Error',
        text: 'Debe seleccionar un agente y proporcionar un código de imagen',
        icon: 'error',
        confirmButtonText: 'Cerrar'
      });
      return;
    }
  
    // Llamar al servicio para recuperar la imagen con el código ingresado
    this.serviciosComponent.recuperarImagen(this.codigo, this.selectedAgente).subscribe(
      (response: Blob) => {
        // Si la solicitud se completa correctamente, crear el documento PDF con la imagen obtenida
        const reader = new FileReader();
        reader.onloadend = () => {
          const pdfDefinition = {
            content: [
              { image: reader.result.toString(), width: 200, height: 200 } // Usar la imagen en el documento PDF
            ]
          };
          pdfMake.createPdf(pdfDefinition).download();
          
          // Mostrar el mensaje de éxito usando SweetAlert
          Swal.fire({
            title: 'PDF Descargado',
            text: 'El PDF se ha descargado correctamente.',
            icon: 'success',
            confirmButtonText: 'Cerrar'
          });
        };
        reader.readAsDataURL(response);
      },
      (error) => {
        // Manejar el error si la solicitud falla
        console.error('Error al obtener la imagen:', error);
        // Mostrar el mensaje de error usando SweetAlert
        Swal.fire({
          title: 'Error',
          text: 'Error al obtener la imagen. Por favor, inténtalo de nuevo.',
          icon: 'error',
          confirmButtonText: 'Cerrar'
        });
      }
    );
  }*/

  descargarpdf() {
    var dd = {
      content: [
        {
          image: 'assets/images/logos/logo2.png', // Ruta relativa a la carpeta de activos (assets)
          width: 300, // Ancho de la imagen en el documento
          alignment: 'center' // Alineación de la imagen en el documento
        }
      ]
    };
  
    var pdf = pdfMake.createPdf(dd);
    pdf.download('documento.pdf');
  }
  

}