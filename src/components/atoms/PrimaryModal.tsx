import { Component, JSX, JSXElement, Show } from 'solid-js';
import '@/assets/css/PrimaryModal.scss';

export const PrimaryModal: Component<{
  isOpen: boolean;
  onClose: JSX.EventHandlerUnion<HTMLDivElement, MouseEvent>;
  children: JSXElement;
}> = (props) => {
  return (
    <Show when={props.isOpen}>
      <div class="modal-container" onClick={props.onClose}>
          <div class="modal-item">{props.children}</div>
      </div>
    </Show>
  );
};
