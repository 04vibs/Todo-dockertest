import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todos-app';

  todos: any = ['a', 'b', 'c'];

  searchValue = '';
  addTodos(todo) {
    this.todos.push(todo.value);
    this.searchValue = '';
  }
  removeTodo( item, index) {
    console.log(item);
    console.log(index);
    this.todos.splice(index, 1);
  }
  clearAll() {
    console.log('Inside clear');
    this.todos = [];
  }
  sort() {
    this.todos.sort((a, b) => {
    // if (a < b) { return -1; } else if (a > b) { return 1; } else {return 0; }
    // descending order
    return (b - a);
  });
  }
}
