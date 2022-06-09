import { Component } from 'solid-js';
import { Button } from '@/components/atoms/Button';

import '@/assets/css/TodoInput.scss';
import createTodo from '@/stores/createTodo';
import { PrimaryInput } from '@/components/atoms/PrimaryInput';

export const TodoInput: Component = () => {
  const { inputValue, handleInput, handleAddTodo, handleKeyUp } = createTodo;
  return (
    <div class="todoInput">
      <PrimaryInput onInput={handleInput} value={inputValue()} onKeyUp={handleKeyUp} />
      <Button onClick={handleAddTodo}>追加</Button>
    </div>
  );
};
