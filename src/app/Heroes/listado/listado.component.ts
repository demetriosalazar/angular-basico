import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['spiderman','ironman','hulk','vision'];
  heroeBorrado = "";

  borrarHeroe(): void {
    console.log("borrando....");
  this.heroeBorrado = this.heroes.shift() || '';
  }
}
