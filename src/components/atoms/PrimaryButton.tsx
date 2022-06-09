import { Component, JSX, JSXElement, mergeProps } from 'solid-js';
import '@/assets/css/PrimaryButton.scss';

export const PrimaryButton: Component<{
  onClick?: JSX.EventHandlerUnion<HTMLSpanElement, MouseEvent>;
  children: JSXElement;
}> = (props) => {
  const marge = mergeProps({ onClick: () => {}, children: <></> }, props);
  return (
    <span class="primaryButton" onClick={marge.onClick}>
      {marge.children}
    </span>
  );
};
