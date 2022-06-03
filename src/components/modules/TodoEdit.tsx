import { PrimaryButton } from '@/components/atoms/PrimaryButton';
import { PrimaryInput } from '@/components/atoms/PrimaryInput';
import { localDB } from '@/db/localDB';
import { editType, todoType } from '@/models/modelTodo';
import createTodo from '@/stores/createTodo';
import { Component, createEffect, Setter } from 'solid-js';

export const TodoEdit: Component<{ setEdit: Setter<editType>; todo: todoType }> = (props) => {
  // export const TodoEdit: Component<{ setEdit: Setter<editType>; todo: todoType; inputRef: HTMLInputElement }> = (props) => {
  const { handleEditInput, editInputValue, setEditInputValue, handleEditKeyUp } = createTodo;
  let inputRef: HTMLInputElement | undefined;

  createEffect(() => {
    if (inputRef) inputRef.focus();
  });
  return (
    <>
      <PrimaryInput
        onInput={handleEditInput}
        value={editInputValue()}
        onBlur={() => {
          props.setEdit('view');
          if (editInputValue() !== '') localDB.updateTodo({ ...props.todo, action: editInputValue() });
          setEditInputValue('');
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
