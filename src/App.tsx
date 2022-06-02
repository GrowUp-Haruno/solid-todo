import { Component } from 'solid-js';

import { TodoCompleteList } from './components/TodoCompleteList';
import { TodoDeleteList } from './components/TodoDeleteList';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';
import './App.scss';
import { localDB } from './db/localDB';

export const App: Component = () => {
  return (
    <div class="container">
      <TodoInput />
      <TodoList />
      <TodoCompleteList />
      <TodoDeleteList />
      <span
        class="button"
        onClick={() => {
          localDB.trashTodo();
        }}
      >
        確定
      </span>
    </div>
  );
};
