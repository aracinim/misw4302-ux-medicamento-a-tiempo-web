import { Component, ViewChild } from '@angular/core';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';


interface TablaElemento {
  nombre: string;
  frecuencia: string;
  fechaInicio: string;
  fechaFin: string;
  accion: string;
}

const ELEMENT_DATA: TablaElemento[] = [
  {nombre: 'Acetaminofem', frecuencia: '8', fechaInicio: '01/01/2025', fechaFin: '01/10/2025', accion:'Editar Eliminar'},
  {nombre: 'Losartan', frecuencia: '24', fechaInicio: '01/01/2025', fechaFin: 'Indefinido', accion:'Editar Eliminar'},
  {nombre: 'Insulina', frecuencia: '8', fechaInicio: '01/01/2025', fechaFin: 'Indefinido', accion:'Editar Eliminar'},
];


@Component({
  selector: 'app-lista-medicamento',
  standalone: true,
  imports: [SidebarComponent, MatTableModule, MatPaginatorModule, MatFormFieldModule, MatInputModule, FormsModule, MatCardModule, MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './lista-medicamento.component.html',
  styleUrl: './lista-medicamento.component.scss'
})
export class ListaMedicamentoComponent {

  columnasMostrar: string[] = ['nombre', 'frecuencia', 'fechaInicio', 'fechaFin', 'accion'];

  datos = new MatTableDataSource<TablaElemento>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.datos.paginator = this.paginator;
  }

  aplicarFiltro(event: Event) {
    const filtroValor = (event.target as HTMLInputElement).value;
    this.datos.filter = filtroValor.trim().toLowerCase();
  }

  onSubmit(): void {
    //console.log(this.form.value);
    alert('Medicamento Eliminado correctamente');
  }
}



