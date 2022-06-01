import { Component, For, Show } from "solid-js";
import createTodo from "../../stores/createTodo";

export const TodoDeleteList: Component = () => {
  const { todoList, handleClick } = createTodo;
  return (
    <>
      <Show when={todoList().filter((todo) => todo.isDelete === true).length !== 0}>
        <p style={{ 'border-bottom': '1px solid black', 'padding-bottom': '8px' }}>削除</p>
      </Show>
      <ul>
        <For each={todoList()}>
          {(todo) => {
            return (
              <Show when={todo.isDelete}>
                <li style={{ padding: '4px', 'list-style': 'none', display: 'flex', 'justify-content': 'space-between', 'align-items': 'center', 'column-gap': '8px' }}>
                  <p>{todo.action}</p>
                  <button
                    onClick={() => {
                      handleClick(todo, { ...todo, isDelete: false });
                    }}
                  >
                    削除を取り消す
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