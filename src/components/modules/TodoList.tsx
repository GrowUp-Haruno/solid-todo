import { BaseTodoList } from '@/components/elements/BaseTodoList';
import { Component } from 'solid-js';

export const TodoList: Component = () => {
  return <BaseTodoList listTitle="やること" todoStatus="todo" />;
};
