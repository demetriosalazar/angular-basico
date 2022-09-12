import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { heroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';



@NgModule({
    declarations: [
        ListadoComponent,
        heroeComponent
    ],

    exports: [
        ListadoComponent
    ],

    imports: [
    CommonModule
    ]
})

export class heroesModule { }