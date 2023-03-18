import { Component } from '@angular/core';
import { Todo } from './model/todo.model';
import { Store } from '@ngrx/store';
import { createTodo } from './store/todos/todos.action';
import { selectAllTodos } from './store/todos/todos';
import { TodosState } from './store/todos/todos.reducer';
import { AppState } from './app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-list';
  content:string ='';
  todosList$:any= this.store.select(selectAllTodos)
  showModal = false;
  constructor(private store:Store<AppState>) {

  }
  toggleModal(){
    this.content = '';
    this.showModal = !this.showModal;
  }

  onSubmit() {
    if(this.content!='') {
      this.store.dispatch(createTodo({content : this.content}))
    }
    this.content = '';
    this.showModal =  false;
  }
}
