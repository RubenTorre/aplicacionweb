import {
  Component,
  Output,
  EventEmitter,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ServiciosComponent } from 'src/app/servicios/servicios.component';
import { Router } from '@angular/router';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  @Input() showToggle = true;
  @Input() toggleChecked = false;
  @Output() toggleMobileNav = new EventEmitter<void>();
  @Output() toggleMobileFilterNav = new EventEmitter<void>();
  @Output() toggleCollapsed = new EventEmitter<void>();

  showFiller = false;

  constructor(public dialog: MatDialog, private servicio: ServiciosComponent, private router: Router) {}

  cerrarSesion() {
    this.servicio.logout().subscribe(
      (data) => {
        // Manejar la respuesta del servicio de cierre de sesión aquí
        console.log(data);
        // Redirigir a la página de inicio después de cerrar sesión
        this.router.navigate(['/authentication/login']);
      },
      (error) => {
        // Manejar cualquier error que pueda ocurrir durante el cierre de sesión
        console.error(error);
      }
    );
  }
}
