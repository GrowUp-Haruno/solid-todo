import { Component } from 'solid-js';
import createTodo from '../../stores/createTodo';

export const TodoInput: Component = () => {
  const { inputValue, setinputValue, setTodoList } = createTodo;
  return (
    <div style={{ display: 'flex', 'column-gap': '8px', 'justify-content': 'space-between' }}>
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
    </div>
  );
};
