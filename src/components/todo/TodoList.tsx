import { Component, For, Show } from 'solid-js';
import createTodo from '../../stores/createTodo';

export const TodoList: Component = () => {
  const { todoList, handleClick } = createTodo;
  return (
    <>
      <p style={{ 'border-bottom': '1px solid black', 'padding-bottom': '8px' }}>Todo</p>
      <ul>
        <For each={todoList()}>
          {(todo) => {
            return (
              <Show when={!(todo.isDelete || todo.isComplete)}>
                <li style={{ padding: '4px', 'list-style': 'none', display: 'flex', 'justify-content': 'flex-end', 'align-items': 'center', 'column-gap': '8px' }}>
                  <p style={{ 'flex-grow': 1 }}>{todo.action}</p>
                  <button
                    onClick={() => {
                      handleClick(todo, { ...todo, isDelete: true });
                    }}
                  >
                    削除
                  </button>
                  <button
                    onClick={() => {
                      handleClick(todo, { ...todo, isComplete: true });
                    }}
                  >
                    完了
                  </button>
                </li>
              </Show>
            );
          }}
        </For>
      </ul>
    </>
  );
};
