import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent implements OnInit {

  infoPelicula: any = {};


  constructor(private activatedrouter: ActivatedRoute,
              private location: Location,
              // tslint:disable-next-line: variable-name
              private _ps: PeliculasService) {
    this.activatedrouter.params.subscribe(params => {
      this.getPelicula(params.id);
    });
  }

  ngOnInit(): void {
  }

  getPelicula(id: string) {
    this._ps.getPelicula(id).subscribe( pelicula => {
      console.log(pelicula);
      this.infoPelicula = pelicula;
    });
  }

  regresar() {
    this.location.back();
  }

}
