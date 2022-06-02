import { createSignal, createRoot, createEffect, onCleanup, JSX, Setter } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import { localDB } from '../db/localDB';
import { editType, todoStatusType, todoType } from '../models/modelTodo';
// import './createTodo.scss';

function createTodo() {
  const [inputValue, setinputValue] = createSignal('');
  const [editInputValue, setEditInputValue] = createSignal('');
  const [todoList, setTodoList] = createSignal<todoType[]>([]);

  let inputRef: HTMLInputElement;

  const handleViewClick = (todo: todoType) => {
    // localDB.updateTodo({ ...todo, edit: 'edit' });
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
    // localDB.updateTodo({ ...todo, action: editInputValue(), edit: 'view' });
    setEditInputValue('');
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

  // ボタン
  const buttons: (todo: todoType) => {
    [x in todoStatusType]: () => JSX.Element;
  } = (todo) => {
    return {
      todo: () => (
        <>
          <button
            onClick={() => {
              handleClick({ ...todo, status: 'delete' });
              // handleClick({ ...todo, status: 'delete', edit: 'view' });
            }}
          >
            削除
          </button>
          <button
            onClick={() => {
              handleClick({ ...todo, status: 'complete' });
              // handleClick({ ...todo, status: 'complete', edit: 'view' });
            }}
          >
            完了
          </button>
        </>
      ),
      complete: () => (
        <button
          onClick={() => {
            handleClick({ ...todo, status: 'todo' });
            // handleClick({ ...todo, status: 'todo', edit: 'view' });
          }}
        >
          完了を取り消す
        </button>
      ),
      delete: () => (
        <button
          onClick={() => {
            handleClick({ ...todo, status: 'todo' });
            // handleClick({ ...todo, status: 'todo', edit: 'view' });
          }}
        >
          削除を取り消す
        </button>
      ),
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
          <button
          // onClick={() => {
          //   if (editInputValue() === '') return;
          //   handleClick({ ...todo, action: editInputValue() });
          //   setEdit('view');
          //   // handleClick({ ...todo, action: editInputValue(), edit: 'view' });
          //   setEditInputValue('');
          // }}
          >
            修正
          </button>
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
