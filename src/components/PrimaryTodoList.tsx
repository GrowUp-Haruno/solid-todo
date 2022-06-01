import { Component, For, JSX, Show } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import { todoListTitleType, todoStatusType, todoType } from '../models/modelTodo';
import createTodo from '../stores/createTodo';

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
      <p style={{ 'border-bottom': '1px solid black', 'padding-bottom': '8px' }}>{props.listTitle}</p>
      <ul>
        <For each={todoList()}>
          {(todo) => {
            return (
              <Show when={todo.status === props.todoStatus}>
                <li style={{ padding: '4px', 'list-style': 'none', display: 'flex', 'justify-content': 'flex-end', 'align-items': 'center', 'column-gap': '8px' }}>
                  <p style={{ 'flex-grow': 1 }}>{todo.action}</p>
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
