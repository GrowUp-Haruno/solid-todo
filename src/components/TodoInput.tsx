import { PrimaryButton } from '@/components/atoms/PrimaryButton';
import { Component } from 'solid-js';
import createTodo from '../stores/createTodo';

import '@/assets/css/TodoInput.scss';

export const TodoInput: Component = () => {
  const { inputValue, handleInput, handleAddTodo, handleKeyUp } = createTodo;
  return (
    <div class="inputContainer">
      <input type="text" onInput={handleInput} value={inputValue()} onkeyup={handleKeyUp} />
      <PrimaryButton onClick={handleAddTodo}>追加</PrimaryButton>
    </div>
  );
};
