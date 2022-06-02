import { PrimaryButton } from '@/components/atoms/PrimaryButton';
import { todoType } from '@/models/modelTodo';
import createTodo from '@/stores/createTodo';
import { Component } from 'solid-js';

export const TodoCompleteButton: Component<{ todo: todoType }> = (props) => {
  const { handleClick } = createTodo;
  return (
    <PrimaryButton
      onClick={() => {
        handleClick({ ...props.todo, status: 'todo' });
      }}
    >
      完了を取り消す
    </PrimaryButton>
  );
};
