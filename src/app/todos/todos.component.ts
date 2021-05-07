import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})


export class TodosComponent implements OnInit {

  checkboxes = [];

  inputTodo: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  public selectAll() {
    const isAllSelected = this.checkboxes.every(ch => ch.value);
    return this.checkboxes.forEach(ch => ch.value = !isAllSelected);
  }

  removeTodo(id) {
    this.checkboxes = this.checkboxes.filter(t => t.id !== id) // remove Todo
  }

  addTodo() {
    this.checkboxes.push({
      id: Math.random(),
      content: this.inputTodo,
      value: false
    });
    this.inputTodo = ''
  }

  get isInputInvalid() {  /// Валидация символов
    return this.inputTodo.length <= 3;
  }




}
