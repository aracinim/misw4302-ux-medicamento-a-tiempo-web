import { Component } from '@angular/core';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-medicamento',
  imports: [SidebarComponent,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatIconModule
    ],
  templateUrl: './nuevo-medicamento.component.html',
  styleUrl: './nuevo-medicamento.component.scss'
})
export class NuevoMedicamentoComponent {

  defaultDateinicio: Date = new Date();
  defaultDateFin: Date = new Date('2025-06-25');

  constructor(private router: Router) {}
  fotoUrl: string | null = null;


  buscarFoto(): void {
    this.fotoUrl = 'https://via.placeholder.com/150';
  }

  onSubmit(): void {
    //console.log(this.form.value);
    alert('Formulario enviado correctamente');
    this.router.navigate(['/medicamento']);
  }

  onCancel(): void {
    //this.form.reset();
    alert('Formulario cancelado');
    this.router.navigate(['/medicamento']);
  }

}
