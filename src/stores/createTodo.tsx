import { createSignal, createMemo, createRoot, createEffect, onCleanup, JSX } from 'solid-js';
import { localDB } from '../db/localDB';
import { todoType } from '../models/modelTodo';

function createTodo() {
  const [inputValue, setinputValue] = createSignal('');
  const [todoList, setTodoList] = createSignal<todoType[]>([]);

  const handleClick = (changeTodo: todoType) => {
    localDB.updateTodo(changeTodo);
  };

  // Todo入力
  const handleInput: JSX.EventHandlerUnion<HTMLInputElement, InputEvent> = (e) => {
    setinputValue(e.currentTarget.value);
  };

  // Todo入力でEnterを検出したらTodoを追加
  const handleKeyUp: JSX.EventHandlerUnion<HTMLInputElement, KeyboardEvent> = (ev) => {
    if (ev.code !== 'Enter') return;
    if (inputValue() === '') return;
    localDB.addTodo(inputValue(), 'todo');
    setinputValue('');
  };

  // Todo追加
  const handleAddTodo = () => {
    if (inputValue() === '') return;
    localDB.addTodo(inputValue(), 'todo');
    setinputValue('');
  };

  // Dexieオブザーバを設定
  const subscription = localDB.observableTodoList.subscribe({
    next: (result) => setTodoList(result),
    error: (error) => console.error(error),
  });

  createEffect(() => {
    console.log(todoList());
  });

  // Dexieオブザーバの後始末
  onCleanup(() => subscription.unsubscribe());

  return { inputValue, todoList, handleClick, handleInput, handleKeyUp, handleAddTodo };
}

export default createRoot(createTodo);
