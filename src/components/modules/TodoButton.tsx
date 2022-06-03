import { PrimaryButton } from '@/components/atoms/PrimaryButton';
import { todoType } from '@/models/modelTodo';
import createTodo from '@/stores/createTodo';
import { Component } from 'solid-js';

export const TodoButton: Component<{ todo: todoType }> = (props) => {
  const { handleClick } = createTodo;
  return (
    <>
      <PrimaryButton
        onClick={() => {
          handleClick({ ...props.todo, status: 'delete' });
        }}
      >
        削除
      </PrimaryButton>
      <PrimaryButton
        onClick={() => {
          handleClick({ ...props.todo, status: 'complete' });
        }}
      >
        完了
      </PrimaryButton>
    </>
  );
};
