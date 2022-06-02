import { Component } from 'solid-js';

import { TodoCompleteList } from './components/TodoCompleteList';
import { TodoDeleteList } from './components/TodoDeleteList';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';
import "@/assets/css/App.scss"
import { localDB } from './db/localDB';
import { PrimaryButton } from './components/atoms/PrimaryButton';

export const App: Component = () => {
  return (
    <div class="container">
      <TodoInput />
      <TodoList />
      <TodoCompleteList />
      <TodoDeleteList />
      <PrimaryButton
        onClick={() => {
          localDB.trashTodo();
        }}
      >
        確定
      </PrimaryButton>
    </div>
  );
};
