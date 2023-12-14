import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Acta } from '../../model/acta';
import { ServiceActas } from '../../service/service-actas.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    CommonModule,
    FormsModule,
    MatTableModule
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  searchText: string = '';
  actas!: Acta[];
  dataSource: any;
  displayedColumns: string[] = ["idActa", "dominio", "documento", "fecha", "descripcion", "monto"];

  constructor(private service: ServiceActas ){}

  search() {
    if (this.searchText) {      
      //ver como refactorizar deprecated + logica
      this.service.getActas(this.searchText).subscribe(
        (result) => {          
          //VAlidar cantidad de elemtos > 0
          //result.CantidadElementos
          //console.log(result.Elementos);
          //this.actas = result.Elementos,    

          console.log(result);
          //console.log('Result convert Elements toActas');
          //console.log(this.actas);
          
          /*this.dataSource = new MatTableDataSource<Acta>(this.actas);
          console.log(this.actas[0].infracciones[0].articulo);*/
        },
        (error) => {
          console.error('Error fetching search results', error);
        }
      );
    } else {
      // Handle empty search
      console.error('Empty results');
    }
  }
  
}
