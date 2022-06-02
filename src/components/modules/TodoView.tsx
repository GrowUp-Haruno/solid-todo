import { editType, todoType } from '@/models/modelTodo';
import createTodo from '@/stores/createTodo';
import { Component, Setter } from 'solid-js';
import { Dynamic } from 'solid-js/web';

export const TodoView: Component<{ setEdit: Setter<editType>; todo: todoType; inputRef: HTMLInputElement }> = (
  props
) => {
  const { handleViewClick, buttons } = createTodo;
  return (
    <>
      <p
        onClick={() => {
          props.setEdit('edit');
          handleViewClick(props.todo);
        }}
      >
        {props.todo.action}
      </p>
      <Dynamic component={buttons(props.todo)[props.todo.status]} />
    </>
  );
};
