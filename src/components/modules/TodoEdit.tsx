import { Button } from '@/components/atoms/Button';
import { PrimaryInput } from '@/components/atoms/PrimaryInput';
import { editType, todoType } from '@/models/modelTodo';
import { createTodoEdit } from '@/stores/createTodoEdit';
import { Component, Setter } from 'solid-js';

export type TodoEditPropsType = { setEdit: Setter<editType>; todo: todoType };

export const TodoEdit: Component<TodoEditPropsType> = (props) => {
  const { editInputValue, handleEditInput, handleEditKeyUp, handleBlur, inputRef } = createTodoEdit(props);

  return (
    <>
      <PrimaryInput
        onInput={handleEditInput}
        value={editInputValue()}
        onBlur={() => {
          handleBlur(props.setEdit, props.todo);
        }}
        onKeyUp={(ev) => {
          handleEditKeyUp(ev, props.todo);
        }}
        ref={inputRef}
      />
      <Button>修正</Button>
    </>
  );
};
