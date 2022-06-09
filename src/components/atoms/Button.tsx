import { Component, JSX, JSXElement, Match, mergeProps, Show, Switch } from 'solid-js';
import '@/assets/css/PrimaryButton.scss';

export const Button: Component<{
  onClick?: JSX.EventHandlerUnion<HTMLSpanElement, MouseEvent>;
  children: JSXElement;
  seondary?: true;
}> = (props) => {
  const marge = mergeProps({ onClick: () => {}, children: <></> }, props);
  return (
    <span class="button" classList={{ primary: !props.seondary, secondary: props.seondary }} onClick={marge.onClick}>
      {marge.children}
    </span>
  );
};
