import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ServiciosComponent } from 'src/app/servicios/servicios.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class AppSideRegisterComponent {
  constructor(private servicio: ServiciosComponent, private router: Router) {}
  
  @Input() inspection: any;
  nombre: string = '';
  nombreUsuario: string = '';
  contrasena: string = '';

  registrarUsuario() {
    const usuario = {
      nombre: this.nombre,
      nombreusuario: this.nombreUsuario,
      contrasenia: this.contrasena
    };

    this.servicio.registrarUsuario(usuario).subscribe(
      (response: any) => {
        // Si la solicitud es exitosa, muestra un mensaje de éxito
        if (response.success) {
          Swal.fire('Usuario registrado exitosamente!', '', 'success');
          // Limpia los campos del formulario
          this.nombre = '';
          this.nombreUsuario = '';
          this.contrasena = '';
        } else {
          // Si hay un error, muestra un mensaje de error
          Swal.fire('Error!', response.message, 'error');
        }
      },
      (error: any) => {
        // Manejo de errores
        console.error('Error al registrar usuario:', error);
        Swal.fire('Error!', 'Hubo un problema al registrar el usuario. Por favor, inténtalo de nuevo más tarde.', 'error');
      }
    );
  }

  submit() {
    // console.log(this.form.value);
    this.router.navigate(['/dashboard']);
  }
}
