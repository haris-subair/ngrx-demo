import { createAction , props} from '@ngrx/store';
import { Todo } from 'src/app/model/todo.model';

export const createTodo = createAction(
    '[Todo Page] Add Todo',
    props<{ content: string }>()
  );
  
  export const deleteTodo = createAction(
    '[Todo Page] Remove Todo',
    props<{ id: string }>()
  );

export const loadTodos =  createAction('[Todos Component] Load Todos');
export const loadTodosSuccess =  createAction('[Todos Component] Load Todos Success');
export const loadTodosFailure =  createAction('[Todos Component] Load Todos Failed');
