import { Component, OnInit } from '@angular/core';
import { ToDo } from '../../model/to-do';
import { ToDoDataService } from '../../services/to-do-data.service';

@Component({
  selector: 'app-to-do-form',
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.css']
})
export class ToDoFormComponent implements OnInit {

  toDo: ToDo;
  
  constructor(private toDoDataService: ToDoDataService) {
    this.toDo = new ToDo(null, null, null);
  }

  save() {
    this.toDoDataService.saveToDo(this.toDo);
    this.toDo = new ToDo(null, null, null);
  }

  ngOnInit() {
  }

}