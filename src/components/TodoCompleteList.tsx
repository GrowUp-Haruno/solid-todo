import { Component, For, Show } from 'solid-js';
import { PrimaryTodoList } from './PrimaryTodoList';

export const TodoCompleteList: Component = () => {
  return <PrimaryTodoList listTitle="完了" todoStatus="complete" />;
};
