import { Component, createEffect, createSignal, For, Show } from 'solid-js';
import { TodoCompleteList } from './components/todo/TodoCompleteList';
import { TodoDeleteList } from './components/todo/TodoDeleteList';
import { TodoInput } from './components/todo/TodoInput';
import { TodoList } from './components/todo/TodoList';

export const App: Component = () => {
  return (
    <div style={{ width: '400px', margin: '0 auto', padding: '16px 0' }}>
      <TodoInput />
      {/* <div style={{ display: 'flex', 'column-gap': '8px', 'justify-content': 'space-between' }}>
        <input
          type="text"
          onInput={(e) => {
            setinputValue(e.currentTarget.value);
          }}
          value={inputValue()}
          style={{ width: '70%', padding: '8px 12px', border: '1px solid #a3a3a3' }}
        />
        <button
          onClick={() => {
            if (inputValue() === '') return;
            setTodoList((prev) => [...prev, { id: prev.length, action: inputValue(), isDelete: false, isShow: true, isComplete: false }]);
            setinputValue('');
          }}
          style={{ padding: '8px 8px' }}
        >
          追加
        </button>
      </div> */}
      <TodoList />
      {/* <p style={{ 'border-bottom': '1px solid black', 'padding-bottom': '8px' }}>Todo</p>
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
      </ul> */}
      <TodoCompleteList />
      {/* <Show when={todoList().filter((todo) => todo.isComplete === true).length !== 0}>
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
      </ul> */}
      <TodoDeleteList />
      {/* <Show when={todoList().filter((todo) => todo.isDelete === true).length !== 0}>
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
      </ul> */}
    </div>
  );
};
