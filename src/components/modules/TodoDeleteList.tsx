import { BaseTodoList } from '@/components/elements/BaseTodoList';
import { Component } from 'solid-js';

export const TodoDeleteList: Component = () => {
  return <BaseTodoList listTitle="削除" todoStatus="delete" />;
};
