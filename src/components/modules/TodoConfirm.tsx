import { Component, Show } from 'solid-js';

import { Button } from '@/components/atoms/Button';
import createTodo from '@/stores/createTodo';

export const TodoConfirm: Component = () => {
  const { handleConfirm, isConfirmShow } = createTodo;

  return (
    <Show when={isConfirmShow()}>
      <Button onClick={handleConfirm}>確定</Button>
    </Show>
  );
};
