import { Component } from 'solid-js';

import { TodoInput } from '@/components/modules/TodoInput';
import { TodoList } from '@/components/modules/TodoList';
import { TodoCompleteList } from '@/components/modules/TodoCompleteList';
import { TodoDeleteList } from '@/components/modules/TodoDeleteList';
import { TodoConfirm } from '@/components/modules/TodoConfirm';

export const Todo: Component = () => {
  return (
    <>
      <TodoInput />
      <TodoList />
      <TodoCompleteList />
      <TodoDeleteList />
      <TodoConfirm />
    </>
  );
};
