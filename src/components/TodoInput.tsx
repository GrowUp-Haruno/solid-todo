import { Component } from 'solid-js';
import { localDB } from '../db/localDB';
import createTodo from '../stores/createTodo';

import './TodoInput.scss';

export const TodoInput: Component = () => {
  const { inputValue, handleInput, handleAddTodo } = createTodo;
  return (
    <div class="inputContaine">
      <input type="text" onInput={handleInput} value={inputValue()} />
      <button onClick={handleAddTodo}>追加</button>
    </div>
  );
};
