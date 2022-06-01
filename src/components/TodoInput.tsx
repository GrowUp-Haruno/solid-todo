import { Component } from 'solid-js';
import createTodo from '../stores/createTodo';

import './TodoInput.scss';

export const TodoInput: Component = () => {
  const { inputValue, handleInput, handleAddTodo, handleKeyUp } = createTodo;
  return (
    <div class="inputContaine">
      <input type="text" onInput={handleInput} value={inputValue()} onkeyup={handleKeyUp} />
      <button onClick={handleAddTodo}>追加</button>
    </div>
  );
};
