import { Component } from 'solid-js';
import { PrimaryTodoList } from '@/components/elements/PrimaryTodoList';

export const TodoCompleteList: Component = () => {
  return <PrimaryTodoList listTitle="完了" todoStatus="complete" />;
};
