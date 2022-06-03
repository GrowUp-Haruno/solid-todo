import { Component, Show } from 'solid-js';

import { PrimaryButton } from '@/components/atoms/PrimaryButton';
import createTodo from '@/stores/createTodo';

export const TodoConfirm: Component = () => {
  const { handleConfirm, isConfirmShow } = createTodo;

  return (
    <Show when={isConfirmShow()}>
      <PrimaryButton onClick={handleConfirm}>確定</PrimaryButton>
    </Show>
  );
};
