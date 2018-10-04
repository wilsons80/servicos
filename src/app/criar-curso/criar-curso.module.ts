/**
 * Criação de um módulo de funcionalidades
 * Isso é diferente de módulo da aplicação
 */

import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';


import { CursosService} from "../cursos/cursos.service";
import { CriarCursoComponent } from './criar-curso.component';
import { ReceberCursoCriadoComponent } from '../receber-curso-criado/receber-curso-criado.component';

@NgModule({
  declarations: [
    CriarCursoComponent,
    ReceberCursoCriadoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[CriarCursoComponent]
  ,providers: [CursosService]
})
export class CriarCursoModule { }
