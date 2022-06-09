import { Button } from '@/components/atoms/Button';
import { todoType } from '@/models/modelTodo';
import createTodo from '@/stores/createTodo';
import { Component } from 'solid-js';

export const TodoDeleteButton: Component<{ todo: todoType }> = (props) => {
  const { handleClick } = createTodo;
  return (
    <Button
      onClick={() => {
        handleClick({ ...props.todo, status: 'todo' });
      }}
    >
      削除を取り消す
    </Button>
  );
};
