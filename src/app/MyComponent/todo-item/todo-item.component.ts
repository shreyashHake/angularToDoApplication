import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToDo } from 'src/app/ToDo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})

export class TodoItemComponent implements OnInit {

  @Input() todo: ToDo;
  @Output() todoDelete:  EventEmitter<ToDo> = new EventEmitter();

  constructor() {
    this.todo = {} as ToDo;
  }

  ngOnInit(): void {2
    
  }

  onClick(todo: ToDo) {
    this.todoDelete.emit(todo);
    console.log('onClick has been triggered')
  }
}
