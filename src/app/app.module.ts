import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CursosService} from "./cursos/cursos.service";
import {CriarCursoModule} from "./criar-curso/criar-curso.module";
import {CursoModule} from "./cursos/curso.module";
import {LogService} from "./shared/log.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CriarCursoModule,
    CursoModule
  ],
  providers:[LogService],
  //providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
