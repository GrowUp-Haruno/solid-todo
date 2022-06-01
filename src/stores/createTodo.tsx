import { createSignal, createMemo, createRoot, createEffect, onCleanup, JSX } from 'solid-js';
import { localDB } from '../db/localDB';
import { todoType } from '../models/modelTodo';

function createTodo() {
  const [inputValue, setinputValue] = createSignal('');
  const [todoList, setTodoList] = createSignal<todoType[]>([]);

  const handleClick = (todo: todoType, changeTodo: todoType) => {
    setTodoList((prev) => {
      prev.splice(todo.id!, 1, { ...changeTodo });
      return [...prev];
    });
  };

  // Todo追加
  const handleAddTodo = () => {
    if (inputValue() === '') return;
    setTodoList((prev) => [...prev, { id: prev.length, action: inputValue(), status: 'todo' }]);
    localDB.addTodo(inputValue(), 'todo');
    setinputValue('');
  };

  // Todo入力
  const handleInput: JSX.EventHandlerUnion<HTMLInputElement, InputEvent> = (e) => {
    setinputValue(e.currentTarget.value);
  };

  // Dexieオブザーバを設定
  const subscription = localDB.observableTodoList.subscribe({
    next: (result) => console.log('Got result:', JSON.stringify(result)),
    error: (error) => console.error(error),
  });

  createEffect(() => {
    console.log(todoList());
  });

  // Dexieオブザーバの後始末
  onCleanup(() => subscription.unsubscribe());

  return { inputValue, todoList, handleClick, handleInput, handleAddTodo };
}

export default createRoot(createTodo);
