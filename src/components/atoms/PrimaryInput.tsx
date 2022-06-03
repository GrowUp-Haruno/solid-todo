import { Component, JSX, splitProps } from 'solid-js';
import '@/assets/css/PrimaryInput.scss';

export const PrimaryInput: Component<JSX.InputHTMLAttributes<HTMLInputElement>> = (props) => {
  const [local] = splitProps(props, ['onInput', 'value', 'onKeyUp', 'onBlur', 'ref']);
  return (
    <input
      type="text"
      class="primaryInput"
      onInput={local.onInput}
      value={local.value}
      onKeyUp={local.onKeyUp}
      onBlur={local.onBlur}
      ref={local.ref}
    />
  );
};
