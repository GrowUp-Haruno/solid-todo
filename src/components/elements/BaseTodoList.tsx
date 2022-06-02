import { Component, createSignal, For, Show } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { editType, todoListTitleType, todoStatusType } from '@/models/modelTodo';
import createTodo from '@/stores/createTodo';
import '@/assets/css/PrimaryTodoList.scss';

export const BaseTodoList: Component<{ listTitle: todoListTitleType; todoStatus: todoStatusType }> = (props) => {
  const { todoList, editComponents } = createTodo;

  return (
    <div class='todoList'>
      <p>{props.listTitle}</p>
      <ul>
        <For each={todoList()}>
          {(todo) => {
            const [edit, setEdit] = createSignal<editType>('view');
            return (
              <Show when={todo.status === props.todoStatus}>
                <li class="todoItem">
                  <Dynamic component={editComponents(todo, setEdit)[edit()]} />
                </li>
              </Show>
            );
          }}
        </For>
      </ul>
    </div>
  );
};
