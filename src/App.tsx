import { Component } from 'solid-js';

import './App.scss';
import { TodoCompleteList } from './components/TodoCompleteList';
import { TodoDeleteList } from './components/TodoDeleteList';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';

export const App: Component = () => {
  return (
    <div class="container">
      <TodoInput />
      <TodoList />
      <TodoCompleteList />
      <TodoDeleteList />
    </div>
  );
};
