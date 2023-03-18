import { isNgTemplate } from '@angular/compiler';
import { createReducer, on } from '@ngrx/store';
import {Todo} from '../../model/todo.model';
import {createTodo , deleteTodo } from './todos.action';

export interface TodosState {
    todos:Todo[];
    error:string|null;
    status: 'pending' | 'loading' | 'error' | 'success'
}

export const InitialTodoState:TodosState = {
    todos : [],
    error : null,
    status: 'pending'
}

export const TodosReducer = createReducer(  InitialTodoState,
    on(createTodo, (state , {content}) => ({...state , todos : [...state.todos ,  { id: Date.now().toString(), content: content}]} )),
    on(deleteTodo, (state , {id}) => ({...state , todos : state.todos.filter((item)=> { item.id !== id})})),
);