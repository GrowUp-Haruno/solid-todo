import { Component } from 'solid-js';
import { PrimaryTodoList } from '@/components/elements/PrimaryTodoList';

export const TodoList: Component = () => {
  return <PrimaryTodoList listTitle="やること" todoStatus="todo" />;
};
