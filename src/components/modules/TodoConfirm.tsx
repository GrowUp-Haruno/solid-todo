import { PrimaryButton } from '@/components/atoms/PrimaryButton';
import createTodo from '@/stores/createTodo';
import { Component } from 'solid-js';

export const TodoConfirm: Component = () => {
  const { handleConfirm } = createTodo;
  return <PrimaryButton onClick={handleConfirm}>確定</PrimaryButton>;
};
