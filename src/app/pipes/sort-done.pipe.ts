import { Pipe, PipeTransform } from '@angular/core';
//import nur notwendig, wenn nicht-"generische" Form (siehe unten)
// import { ToDo } from '../model/to-do';

@Pipe({
  name: 'sortDone'
})
export class SortDonePipe implements PipeTransform {

  //in "generischer" Form:
  transform(value: any, args?: any): any {
    value.sort((a: any, b: any) => {
      if (a.done === true && b.done === false) {
        return 1; 
      } else if (a.done === false && b.done === true) {
        return -1;
      } else {
        return 0;
      }
    });
    return value;
  }

  //oder in Kurzschreibweise und mit Inkaufnehmen der Sortierung im Falle gleicher Werte:
  // transform(value: any, args?: any): any {
  //   value.sort((a: any, b: any) => {
  //     return (a.done === true && b.done === false) ? 1 : -1;
      
  //   });
  //   return value;
  // }



  //nicht-"generische" Form:
  // transform(toDos: ToDo[], toDo: ToDo): ToDo[] {
  //   toDos.sort((a: ToDo, b: ToDo) => {
  //     if (a.done === true && b.done === false) {
  //       return 1; 
  //     } else if (a.done === false && b.done === true) {
  //       return -1;
  //     } else {
  //       return 0;
  //     }
  //   });
  //   return toDos;
  // }

}
