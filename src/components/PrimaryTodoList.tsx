import { Component, For, JSX, Show } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import { todoListTitleType, todoStatusType, todoType } from '../models/modelTodo';
import createTodo from '../stores/createTodo';

import './PrimaryTodoList.scss';

export const PrimaryTodoList: Component<{ listTitle: todoListTitleType; todoStatus: todoStatusType }> = (props) => {
  const { todoList, handleClick } = createTodo;

  const buttons: (todo: todoType) => {
    todo: () => JSX.Element;
    complete: () => JSX.Element;
    delete: () => JSX.Element;
  } = (todo) => {
    return {
      todo: () => (
        <>
          <button
            onClick={() => {
              handleClick(todo, { ...todo, status: 'delete' });
            }}
          >
            削除
          </button>
          <button
            onClick={() => {
              handleClick(todo, { ...todo, status: 'complete' });
            }}
          >
            完了
          </button>
        </>
      ),
      complete: () => (
        <button
          onClick={() => {
            handleClick(todo, { ...todo, status: 'todo' });
          }}
        >
          完了を取り消す
        </button>
      ),
      delete: () => (
        <button
          onClick={() => {
            handleClick(todo, { ...todo, status: 'todo' });
          }}
        >
          削除を取り消す
        </button>
      ),
    };
  };

  return (
    <>
      <p class="todoTitle">{props.listTitle}</p>
      <ul>
        <For each={todoList()}>
          {(todo) => {
            return (
              <Show when={todo.status === props.todoStatus}>
                <li class="todoItem">
                  <p>{todo.action}</p>
                  <Dynamic component={buttons(todo)[props.todoStatus]} />
                </li>
              </Show>
            );
          }}
        </For>
      </ul>
    </>
  );
};
