import { Component, For, Show } from 'solid-js';
import { PrimaryTodoList } from './PrimaryTodoList';

export const TodoList: Component = () => {
  return <PrimaryTodoList listTitle="やること" todoStatus="todo" />;
};
