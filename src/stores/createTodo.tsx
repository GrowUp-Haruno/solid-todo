import { createSignal, createRoot, createEffect, onCleanup, JSX, Setter } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import { localDB } from '../db/localDB';
import { editType, todoStatusType, todoType } from '../models/modelTodo';

function createTodo() {
  const [inputValue, setinputValue] = createSignal('');
  const [editInputValue, setEditInputValue] = createSignal('');
  const [todoList, setTodoList] = createSignal<todoType[]>([]);

  // 編集入力のref
  let inputRef: HTMLInputElement;

  const handleViewClick = (todo: todoType) => {
    setEditInputValue(todo.action);
    inputRef.focus();
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
      todo: () => (
        <>
          <span class="button"
            onClick={() => {
              handleClick({ ...todo, status: 'delete' });
            }}
          >
            削除
          </span>
          <span class="button"
            onClick={() => {
              handleClick({ ...todo, status: 'complete' });
            }}
          >
            完了
          </span>
        </>
      ),
      complete: () => (
        <span class="button"
          onClick={() => {
            handleClick({ ...todo, status: 'todo' });
          }}
        >
          完了を取り消す
        </span>
      ),
      delete: () => (
        <span class="button"
          onClick={() => {
            handleClick({ ...todo, status: 'todo' });
          }}
        >
          削除を取り消す
        </span>
      ),
      trash: () => <></>,
    };
  };

  const editInput: (
    todo: todoType,
    setEdit: Setter<editType>
  ) => {
    [x in editType]: () => JSX.Element;
  } = (todo, setEdit) => {
    return {
      edit: () => (
        <>
          <input
            type="text"
            onInput={handleEditInput}
            value={editInputValue()}
            onblur={() => {
              setEdit('view');
              if (editInputValue() !== '') localDB.updateTodo({ ...todo, action: editInputValue() });
              setEditInputValue('');
            }}
            onkeyup={(ev) => {
              handleEditKeyUp(ev, todo);
            }}
            ref={inputRef}
          />
          <span class="button">修正</span>
        </>
      ),
      view: () => (
        <>
          <p
            onClick={() => {
              setEdit('edit');
              handleViewClick(todo);
            }}
          >
            {todo.action}
          </p>
          <Dynamic component={buttons(todo)[todo.status]} />
        </>
      ),
    };
  };

  return { inputValue, todoList, handleClick, handleInput, handleKeyUp, handleAddTodo, buttons, editInput };
}

export default createRoot(createTodo);
