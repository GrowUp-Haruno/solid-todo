import { createSignal, createMemo, createRoot, createEffect } from 'solid-js';
import { todoType } from '../models/modelTodo';

function createTodo() {
  const [inputValue, setinputValue] = createSignal('');
  const [todoList, setTodoList] = createSignal<todoType[]>([]);

  const handleClick = (todo: todoType, changeTodo: todoType) => {
    setTodoList((prev) => {
      prev.splice(todo.id, 1, { ...changeTodo });
      return [...prev];
    });
  };

  createEffect(() => {
    console.log(todoList());
  });

  return { inputValue, setinputValue, todoList, setTodoList, handleClick };
}

export default createRoot(createTodo);
