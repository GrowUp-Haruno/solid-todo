import { Component, createSignal, For, JSX, Show } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import { editType, todoListTitleType, todoStatusType, todoType } from '../models/modelTodo';
import createTodo from '../stores/createTodo';

import './PrimaryTodoList.scss';

export const PrimaryTodoList: Component<{ listTitle: todoListTitleType; todoStatus: todoStatusType }> = (props) => {
  const { todoList, buttons, editInput } = createTodo;

  return (
    <>
      <p class="todoTitle">{props.listTitle}</p>
      <ul>
        <For each={todoList()}>

          {(todo) => {
            const [edit, setEdit] = createSignal<editType>('view')
            return (
              <Show when={todo.status === props.todoStatus}>
                <li class="todoItem">
                  {/* <p onClick={() => handleChangeEdit(todo)}>{todo.action}</p> */}
                  <Dynamic component={editInput(todo, setEdit)[edit()]} />
                  {/* <Dynamic component={buttons(todo)[props.todoStatus]} /> */}
                </li>
              </Show>
            );
          }}
        </For>
      </ul>
    </>
  );
};
