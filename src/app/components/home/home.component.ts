import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  populares: any[] = [];
  popularesNinos: any[] = [];
  cartelera: any[] = [];

  // tslint:disable-next-line: variable-name
  constructor( private _ps: PeliculasService) { }

  ngOnInit(): void {
    this.getPopulares();
    this.getPopularesNino();
    this.getCartelera();
  }

  getPopulares() {
    this._ps.getPopulares().subscribe(data => {
      // console.log(data[0].poster_path);
      this.populares = data;
     });
  }
  getPopularesNino() {
    this._ps.getPopularesNinos().subscribe(data => {
      console.log(data);
      this.popularesNinos = data;
     });
  }
  getCartelera() {
    this._ps.getCartelera().subscribe(data => {
      // console.log(data);
      this.cartelera = data;
     });
  }

}
