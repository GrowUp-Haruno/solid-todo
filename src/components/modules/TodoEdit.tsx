import { PrimaryButton } from '@/components/atoms/PrimaryButton';
import { PrimaryInput } from '@/components/atoms/PrimaryInput';
import { localDB } from '@/db/localDB';
import { editType, todoType } from '@/models/modelTodo';
import createTodoEdit from '@/stores/createTodoEdit';
import { Component, createEffect, Setter } from 'solid-js';

export const TodoEdit: Component<{ setEdit: Setter<editType>; todo: todoType }> = (props) => {
  const { editInputValue, setEditInputValue, handleEditInput, handleEditKeyUp, handleBlur } = createTodoEdit;

  let inputRef: HTMLInputElement | undefined;
  createEffect(() => {
    if (inputRef) inputRef.focus();
    setEditInputValue(props.todo.action);
  });
  
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
      <PrimaryButton>修正</PrimaryButton>
    </>
  );
};
