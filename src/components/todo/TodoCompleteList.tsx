import { Component, For, Show } from "solid-js";
import createTodo from "../../stores/createTodo";

export const TodoCompleteList: Component = () => { 
  const { todoList, handleClick } = createTodo;
  return (
    <>
      <Show when={todoList().filter((todo) => todo.isComplete === true).length !== 0}>
        <p style={{ 'border-bottom': '1px solid black', 'padding-bottom': '8px' }}>完了</p>
      </Show>
      <ul>
        <For each={todoList()}>
          {(todo) => {
            return (
              <Show when={todo.isComplete}>
                <li style={{ padding: '4px', 'list-style': 'none', display: 'flex', 'justify-content': 'space-between', 'align-items': 'center', 'column-gap': '8px' }}>
                  <p>{todo.action}</p>
                  <button
                    onClick={() => {
                      handleClick(todo, { ...todo, isComplete: false });
                    }}
                  >
                    完了を取り消す
                  </button>
                </li>
              </Show>
            );
          }}
        </For>
      </ul>
    </>
  );
}