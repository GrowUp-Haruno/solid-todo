import { Component, For, Show } from 'solid-js';
import { PrimaryTodoList } from './PrimaryTodoList';

export const TodoDeleteList: Component = () => {
  return <PrimaryTodoList listTitle="削除" todoStatus="delete" />;
};
