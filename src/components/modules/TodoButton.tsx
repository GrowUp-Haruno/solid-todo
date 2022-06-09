import { Button } from '@/components/atoms/Button';
import { todoType } from '@/models/modelTodo';
import createTodo from '@/stores/createTodo';
import { Component } from 'solid-js';

export const TodoButton: Component<{ todo: todoType }> = (props) => {
  const { handleClick } = createTodo;
  return (
    <>
      <Button
        seondary
        onClick={() => {
          handleClick({ ...props.todo, status: 'delete' });
        }}
      >
        削除
      </Button>
      <Button
        onClick={() => {
          handleClick({ ...props.todo, status: 'complete' });
        }}
      >
        完了
      </Button>
    </>
  );
};
