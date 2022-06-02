import { Component } from 'solid-js';
import { PrimaryTodoList } from '@/components/elements/PrimaryTodoList';

export const TodoDeleteList: Component = () => {
  return <PrimaryTodoList listTitle="削除" todoStatus="delete" />;
};
