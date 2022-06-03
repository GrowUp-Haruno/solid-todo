import { createSignal, createRoot, createEffect, onCleanup, JSX, Setter } from 'solid-js';
import { editType, todoStatusType, todoType } from '../models/modelTodo';
import { TodoButton } from '@/components/modules/TodoButton';
import { TodoCompleteButton } from '@/components/modules/TodoCompleteButton';
import { TodoDeleteButton } from '@/components/modules/TodoDeleteButton';
import { TodoEdit } from '@/components/modules/TodoEdit';
import { TodoView } from '@/components/modules/TodoView';
import { localDB } from '@/db/localDB';

function createTodo() {
  const [inputValue, setinputValue] = createSignal('');
  const [editInputValue, setEditInputValue] = createSignal('');
  const [todoList, setTodoList] = createSignal<todoType[]>([]);

  // 編集入力のref
  // let inputRef: HTMLInputElement;

  const handleViewClick = (todo: todoType) => {
    setEditInputValue(todo.action);
    // inputRef.focus();
  };

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

  // Todo編集入力
  const handleEditInput: JSX.EventHandlerUnion<HTMLInputElement, InputEvent> = (e) => {
    setEditInputValue(e.currentTarget.value);
  };
  // Todo編集入力でEnterを検出したらTodoを追加
  const handleEditKeyUp = (ev: KeyboardEvent, todo: todoType) => {
    if (ev.code !== 'Enter') return;
    if (editInputValue() === '') return;
    localDB.updateTodo({ ...todo, action: editInputValue() });
    setEditInputValue('');
  };

  // Todo追加
  const handleAddTodo = () => {
    if (inputValue() === '') return;
    localDB.addTodo(inputValue(), 'todo');
    setinputValue('');
  };

  // 変更確定
  const handleConfirm = () => {
    localDB.trashTodo();
  };

  // Dexieオブザーバを設定(indexDBが更新されると発火)
  const subscription = localDB.observableTodoList.subscribe({
    next: (result) => setTodoList(result),
    error: (error) => console.error(error),
  });

  // 各種Signalが更新された時に発火
  createEffect(() => {
    console.log(todoList());
  });

  // Dexieオブザーバの後始末
  onCleanup(() => subscription.unsubscribe());

  // ボタン
  const buttons: (todo: todoType) => {
    [x in todoStatusType]: () => JSX.Element;
  } = (todo) => {
    return {
      todo: () => <TodoButton todo={todo} />,
      complete: () => <TodoCompleteButton todo={todo} />,
      delete: () => <TodoDeleteButton todo={todo} />,
      trash: () => <></>,
    };
  };

  const editComponents: (
    todo: todoType,
    setEdit: Setter<editType>
  ) => {
    [x in editType]: () => JSX.Element;
  } = (todo, setEdit) => {
    return {
      edit: () => <TodoEdit setEdit={setEdit} todo={todo} />,
      // edit: () => <TodoEdit inputRef={inputRef} setEdit={setEdit} todo={todo} />,
      view: () => <TodoView setEdit={setEdit} todo={todo} />,
    };
  };

  return {
    inputValue,
    todoList,
    buttons,
    editComponents,
    editInputValue,
    setEditInputValue,
    handleClick,
    handleInput,
    handleKeyUp,
    handleAddTodo,
    handleConfirm,
    handleEditInput,
    handleEditKeyUp,
    handleViewClick,
  };
}

export default createRoot(createTodo);
