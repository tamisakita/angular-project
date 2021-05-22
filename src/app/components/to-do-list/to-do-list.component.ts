import { Component, OnInit } from '@angular/core';
import { ToDos } from 'src/app/models/to-dos';
import { ToDo } from 'src/app/models/to-do';


@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  toDos: Array<ToDo> = [];
  text = '';

  constructor() { }

  ngOnInit(): void {
  }

  addToDo(text:string) {
    console.log('O texto digitado é', text);

    const id = this.toDos.length + 1
    this.toDos.push(new ToDo(id, text, false))

    console.log(this.toDos);
    this.text = '';
  }

  removeToDo(event: ToDo) {
    // console.log('O elemento pai recebeu', event)

    let indice = this.toDos.indexOf(event)

    this.toDos.splice(indice, 1)
  }
}
