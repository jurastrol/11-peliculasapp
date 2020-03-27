import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html'
})
export class TarjetaComponent implements OnInit {

  @Input() items: any[] = [];

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  verPelicula(item: any) {
    let peliculaID;
    peliculaID = item.id;
    this.router.navigate(['/pelicula', peliculaID]);
    }

}
