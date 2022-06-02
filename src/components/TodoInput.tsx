import { Component } from 'solid-js';
import createTodo from '../stores/createTodo';

import './TodoInput.scss';

export const TodoInput: Component = () => {
  const { inputValue, handleInput, handleAddTodo, handleKeyUp } = createTodo;
  return (
    <div class="inputContainer">
      <input type="text" onInput={handleInput} value={inputValue()} onkeyup={handleKeyUp} />
      <span class="button" onClick={handleAddTodo}>追加</span>
    </div>
  );
};
