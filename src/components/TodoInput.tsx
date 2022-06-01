import { Component } from 'solid-js';
import createTodo from '../stores/createTodo';

import './TodoInput.scss';

export const TodoInput: Component = () => {
  const { inputValue, setinputValue, setTodoList } = createTodo;
  return (
    <div class="inputContaine">
      <input
        type="text"
        onInput={(e) => {
          setinputValue(e.currentTarget.value);
        }}
        value={inputValue()}
      />
      <button
        onClick={() => {
          if (inputValue() === '') return;
          setTodoList((prev) => [...prev, { id: prev.length, action: inputValue(), status: 'todo' }]);
          setinputValue('');
        }}
      >
        追加
      </button>
    </div>
  );
};
