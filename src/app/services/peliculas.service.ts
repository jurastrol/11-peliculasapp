import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apikey = '00c75019b7b8a7593896aed353dc2120';
  private urlMoviedb = 'https://api.themoviedb.org/3';

  peliculas: any[] = [];

  constructor( private http: HttpClient) {
   }

  getPopulares() {
    const url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es`;
    return this.http.get(url).pipe(map( (res: any) => res.results));
  }

  getCartelera() {
    // tslint:disable-next-line: max-line-length
    const desde = new Date();
    const hasta = new Date();
    hasta.setDate(hasta.getDate() + 7);
    const desdeStr = desde.toISOString().substring(0, 10);
    const hastaStr = hasta.toISOString().substring(0, 10);
    console.log(desdeStr);
    console.log(hastaStr);
    // tslint:disable-next-line: max-line-length
    const url = `${this.urlMoviedb}/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&api_key=${this.apikey}&language=es`;
    return this.http.get( url ).pipe(map( (res: any) => res.results));
  }

  getPopularesNinos() {
    // tslint:disable-next-line: max-line-length
    const url = `${this.urlMoviedb}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apikey}&language=es`;
    console.log(url);
    return this.http.get(url).pipe(map( (res: any) => res.results));
  }

  getPelicula(id: string) {
    // tslint:disable-next-line: max-line-length
    const url = `${this.urlMoviedb}/movie/${id}?api_key=${this.apikey}&language=es`;
    console.log(url);
    return this.http.get(url);
  }

  buscarPelicula( texto: string) {

    const url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;

    return this.http.get( url ).pipe(map( (res: any) => {
      this.peliculas = res.results;
      return res.results;
     }));
  }

}
