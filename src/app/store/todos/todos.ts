import { createSelector, State } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { TodosState } from './todos.reducer';

export const selectTodos = (state:AppState) => state.todos;
export const selectAllTodos =  createSelector(selectTodos ,(state:TodosState)=> state.todos)