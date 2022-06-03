import { createSignal, createRoot, JSX, Setter } from 'solid-js';
import { editType, todoType } from '../models/modelTodo';
import { localDB } from '@/db/localDB';

function createTodoEdit() {
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

  return {
    editInputValue,
    setEditInputValue,
    handleEditInput,
    handleEditKeyUp,
    handleBlur,
  };
}

export default createRoot(createTodoEdit);
