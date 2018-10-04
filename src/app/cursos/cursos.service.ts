import {EventEmitter, Injectable} from "@angular/core";
import {LogService} from "../shared/log.service";


//Anotação usada para que CursosService possa ser injetável por denpendência
//É necessário incluir no provider do módulo principal
@Injectable()
export  class CursosService {

  emitirCursoCriado        = new EventEmitter<string>();
  static criouNovoCurso    = new EventEmitter<string>();

  private cursos: string[] = ['Angular 2', 'Java', 'JUnit'];

  constructor(private logService: LogService){
    console.log('CursosService');
  }

  getCursos(){
      this.logService.consoleLog(this.cursos.toString());
      return this.cursos;
  }


  addCurso(curso: string){
    this.logService.consoleLog(`Criando um novo curso ${curso}`);
    this.cursos.push(curso);

    this.emitirCursoCriado.emit(curso);
    CursosService.criouNovoCurso.emit(curso);
  }

}
