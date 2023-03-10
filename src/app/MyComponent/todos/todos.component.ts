import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/ToDo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit{
  todos: ToDo[] = [];

  constructor(){
    this.todos = [
      {
        sno: 1,
        title: 'This is title1',
        desc: 'This is description1',
        active: true
      },

      {
        sno: 2,
        title: 'This is title2',
        desc: 'This is description2',
        active: true
      },

      {
        sno: 3,
        title: 'This is title3',
        desc: 'This is description3',
        active: true
      }
    ]
  }

  ngOnInit(): void {
    
  }

  deleteTodo(todo: ToDo) {
    console.log(todo);
    
  }
}
