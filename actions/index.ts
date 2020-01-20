import {
  TODO_ONCHANGE,
  TODO_ADD,
} from '../constants/actionTypes';

export const onChangeTodo = (item) => ({ type: TODO_ONCHANGE, item });

export const addTodo = (item) => ({ type: TODO_ADD, item });
