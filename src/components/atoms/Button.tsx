import { Component, JSX, JSXElement, Match, mergeProps, Show, Switch } from 'solid-js';
import '@/assets/css/PrimaryButton.scss';

export const Button: Component<{
  onClick?: JSX.EventHandlerUnion<HTMLSpanElement, MouseEvent>;
  children: JSXElement;
  seondary?: true;
}> = (props) => {
  const marge = mergeProps({ onClick: () => {}, children: <></> }, props);
  return (
    <Switch>
      <Match when={!props.seondary}>
        <span class="button primary" onClick={marge.onClick}>
          {marge.children}
        </span>
      </Match>
      <Match when={props.seondary}>
        <span class="button secondary" onClick={marge.onClick}>
          {marge.children}
        </span>
      </Match>
    </Switch>
  );
};
