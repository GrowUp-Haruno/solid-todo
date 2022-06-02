import { Component } from 'solid-js';

import "@/assets/css/App.scss"

import { TodoCompleteList } from '@/components/modules/TodoCompleteList';
import { PrimaryButton } from '@/components/atoms/PrimaryButton';
import { localDB } from '@/db/localDB';
import { TodoInput } from '@/components/modules/TodoInput';
import { TodoList } from '@/components/modules/TodoList';
import { TodoDeleteList } from '@/components/modules/TodoDeleteList';


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
