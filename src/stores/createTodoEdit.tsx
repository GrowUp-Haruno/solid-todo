import { createSignal, createRoot, JSX, Setter, createEffect } from 'solid-js';
import { editType, todoType } from '../models/modelTodo';
import { localDB } from '@/db/localDB';
import { TodoEditPropsType } from '@/components/modules/TodoEdit';

export function createTodoEdit(props: TodoEditPropsType) {
  const [editInputValue, setEditInputValue] = createSignal('');

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

  // 編集入力のフォーカスが外れたら保存処理とSignalの初期化を行う
  // editInputValueが空の場合は保存処理は行わない
  const handleBlur = (setEdit: Setter<editType>, todo: todoType) => {
    setEdit('view');
    if (editInputValue() !== '') localDB.updateTodo({ ...todo, action: editInputValue() });
    setEditInputValue('');
  };

  // 編集モードに切り替わったらフォーカスを当てる
  const inputRef = (el: HTMLInputElement) => {
    createEffect(() => {
      el.focus();
      setEditInputValue(props.todo.action);
    });
  };
  return {
    editInputValue,
    handleEditInput,
    handleEditKeyUp,
    handleBlur,
    inputRef,
  };
}
