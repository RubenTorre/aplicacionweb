import { Component ,OnInit} from '@angular/core';

import { Observable } from 'rxjs';
import { ServiciosComponent } from 'src/app/servicios/servicios.component';

import Swal from 'sweetalert2';

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
})
export class AppListsComponent {

  AplicacionList$!:Observable<any[]>;
  inspectionTypesList$!:Observable<any[]>;
  inspectionTypesList:any=[];

  constructor(private servicio:ServiciosComponent) {}

  ngOnInit(): void {

    this.AplicacionList$ = this.servicio.getAgenteList();

  }

  
}
