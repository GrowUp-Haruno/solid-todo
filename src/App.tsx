import { Component } from 'solid-js';

import '@/assets/css/App.scss';
import { Todo } from '@/components/substrates/Todo';

export const App: Component = () => {
  return (
    <div class="container">
      <Todo />
    </div>
  );
};
