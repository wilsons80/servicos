import { Component, OnInit } from '@angular/core';
import {CursosService} from "../cursos/cursos.service";

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css'],
  providers:[CursosService]
})
export class CriarCursoComponent implements OnInit {

  cursos:string[] = [];

  constructor(private _cursosService:CursosService) {
  }

  ngOnInit() {
    this.cursos = this._cursosService.getCursos();
  }


  addCurso(curso: string){
    this._cursosService.addCurso(curso);
  }

}
