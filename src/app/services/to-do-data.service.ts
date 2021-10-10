import { Injectable } from '@angular/core';
import { ToDo } from '../model/to-do';

@Injectable()
export class ToDoDataService {
  
  toDos: ToDo[] = [];
  
  constructor() {
    this.toDos.unshift(new ToDo("Staub saugen", false));
    this.toDos.unshift(new ToDo("Edeka-Einkauf", true));
    this.toDos.unshift(new ToDo("Erstattungsantrag an Krankenversicherung", false, "2021-12-31"));
    this.toDos.unshift(new ToDo("Kaffee einkaufen", true));
    this.toDos.unshift(new ToDo("Rouladen auftauen", false));
  }

  saveToDo(toDo: ToDo) {
    this.toDos.unshift(toDo);
  }

  toggleToDo(toDo: ToDo) {
    toDo.done = !toDo.done;
    this.toDos = this.toDos.filter(t => t == t);
  }

}