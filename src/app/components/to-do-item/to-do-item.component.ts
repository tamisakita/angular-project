import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ToDo } from 'src/app/models/to-do';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent implements OnInit {
  done = false;

  @Input() toDo: ToDo = {
    id: 0,
    text: '',
    done: false
  };

  @Output() remove = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  removeToDo() {
    this.remove.emit(this.toDo);
  }

  markAsDone() {
    this.done = true
    this.toDo.done = true;
  }
}
