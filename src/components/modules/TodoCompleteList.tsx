import { BaseTodoList } from '@/components/elements/BaseTodoList';
import { Component } from 'solid-js';

export const TodoCompleteList: Component = () => {
  return <BaseTodoList listTitle="完了" todoStatus="complete" />;
};
