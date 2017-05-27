import { Component } from '@angular/core';
import { TodoListDataService } from '../../services/todoListData/todo-list-data.service'
import { TodoItem } from '../../models/todo-item.model'

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  providers: [TodoListDataService]
})
export class TodoListComponent {
  newTodo: string = '';
  errorMessage: string = '';

  constructor(private todoListDataService: TodoListDataService) { }

  get todoList(): TodoItem[] {
    return this.todoListDataService.todoList
  }

  addTodo() {
    if (this.newTodo) {
      this.todoListDataService.addTodoItemWithTodo(this.newTodo);
      this.newTodo = '';
    } else {
      this.errorMessage = "Can't add empty todo!"
    }
  }

  removeTodo(todo: TodoItem) {
    this.todoListDataService.removeTodoItem(todo);
  }

  toggleTodoComplete(todo: TodoItem) {
    this.todoListDataService.toggleCompletedForTodoItem(todo);
  }
}
