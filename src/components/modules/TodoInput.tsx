import { Component } from 'solid-js';
import { PrimaryButton } from '@/components/atoms/PrimaryButton';

import '@/assets/css/TodoInput.scss';
import createTodo from '@/stores/createTodo';

export const TodoInput: Component = () => {
  const { inputValue, handleInput, handleAddTodo, handleKeyUp } = createTodo;
  return (
    <div class="inputContainer">
      <input type="text" onInput={handleInput} value={inputValue()} onkeyup={handleKeyUp} />
      <PrimaryButton onClick={handleAddTodo}>追加</PrimaryButton>
    </div>
  );
};
