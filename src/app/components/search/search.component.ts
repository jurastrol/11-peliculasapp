import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  peliculas: any[] = [];

  // tslint:disable-next-line: variable-name
  constructor( public _ps: PeliculasService) { }

  ngOnInit(): void {
  }

  buscarPelicula(nombre: string) {

    if (nombre.length === 0) {
      return 0;
    }

    this._ps.buscarPelicula(nombre).subscribe(data => {
      // console.log(data[0].poster_path);
      this.peliculas = data;
     });

  }

}
