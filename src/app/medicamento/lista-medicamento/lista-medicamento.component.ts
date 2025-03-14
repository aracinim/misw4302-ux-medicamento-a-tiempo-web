import { Component, ViewChild } from '@angular/core';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';


interface TablaElemento {
  nombre: string;
  posicion: number;
  peso: number;
  simbolo: string;
}

const ELEMENT_DATA: TablaElemento[] = [
  {posicion: 1, nombre: 'Hidrógeno', peso: 1.0079, simbolo: 'H'},
  {posicion: 2, nombre: 'Helio', peso: 4.0026, simbolo: 'He'},
  {posicion: 3, nombre: 'Litio', peso: 6.941, simbolo: 'Li'},
  {posicion: 4, nombre: 'Berilio', peso: 9.0122, simbolo: 'Be'},
  {posicion: 5, nombre: 'Boro', peso: 10.811, simbolo: 'B'},
  {posicion: 6, nombre: 'Carbono', peso: 12.0107, simbolo: 'C'},
  {posicion: 7, nombre: 'Nitrógeno', peso: 14.0067, simbolo: 'N'},
  {posicion: 8, nombre: 'Oxígeno', peso: 15.9994, simbolo: 'O'},
  {posicion: 9, nombre: 'Flúor', peso: 18.9984, simbolo: 'F'},
  {posicion: 10, nombre: 'Neón', peso: 20.1797, simbolo: 'Ne'},
];


@Component({
  selector: 'app-lista-medicamento',
  standalone: true,
  imports: [SidebarComponent, MatTableModule, MatPaginatorModule, MatFormFieldModule, MatInputModule, FormsModule, MatCardModule],
  templateUrl: './lista-medicamento.component.html',
  styleUrl: './lista-medicamento.component.scss'
})
export class ListaMedicamentoComponent {

  columnasMostrar: string[] = ['posicion', 'nombre', 'peso', 'simbolo'];

  datos = new MatTableDataSource<TablaElemento>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.datos.paginator = this.paginator;
  }

  aplicarFiltro(event: Event) {
    const filtroValor = (event.target as HTMLInputElement).value;
    this.datos.filter = filtroValor.trim().toLowerCase();
  }
}



