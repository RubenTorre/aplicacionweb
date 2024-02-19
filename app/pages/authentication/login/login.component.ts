import { T } from '@angular/cdk/keycodes';
import { Component,OnInit,Input  } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiciosComponent } from 'src/app/servicios/servicios.component';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',

})
export class AppSideLoginComponent implements OnInit {
  inspectionList$!: Observable<any[]>;
  statusList$!: Observable<any[]>;
  inspectionTypesList$!: Observable<any[]>;
  titularAlerta:string='';

  constructor(private servicio:ServiciosComponent, private router:Router
      
  ) { }

  @Input() inspection:any;
  nombreusuario: string = "";
  contrasenia: string = "";

  ngOnInit(): void {

}


  loginuser(){
    var usuario = {
      nombreusuario:this.nombreusuario,
      contrasenia:this.contrasenia
    }
    this.servicio.loginuser(usuario).subscribe((res: any) => {
      if (res.success) { // Verifica si las credenciales son correctas
        // Redirige al usuario a la ruta deseada, por ejemplo '/dashboard'
        this.router.navigate(['/dashboard']);
      } else {
        // Muestra un mensaje de error o realiza otras acciones en caso de credenciales incorrectas
        Swal.fire({
          icon: 'error',
          title: 'Credenciales Incorrectas',
          text: 'Intentalo de nuevo',
         
        })
      } 
    })
  }
  
  
  


 
}
