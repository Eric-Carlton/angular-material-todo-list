import { Injectable } from '@angular/core';
import { TodoItem } from '../../models/todo-item.model';

@Injectable()
export class TodoListDataService {
  private nextTodoItemId: number;
  todoList: TodoItem[];


  constructor() {
    this.nextTodoItemId = 0;
    this.todoList = [];
  }

  addTodoItemWithTodo(todo: string) {
    this.todoList.push(new TodoItem(this.nextTodoItemId++, todo, false));
  }

  removeTodoItem(toRemove: TodoItem) {
    this.todoList = this.todoList.filter(cur => cur.id !== toRemove.id);
  }

  toggleCompletedForTodoItem(toToggle: TodoItem) {
    this.todoList.filter(cur => cur.id === toToggle.id).pop().completed = !toToggle.completed;
  }
}
