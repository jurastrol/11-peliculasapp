import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(images: string): string {
    if ( !images ) {
      return 'assets/noimage.jpg';
    }

    if ( images.length > 0) {
      return `http://image.tmdb.org/t/p/w300${images}`;
    } else {
      return 'assets/noimage.jpg';
    }
  }

}
