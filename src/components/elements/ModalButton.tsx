import { Button } from '@/components/atoms/Button';
import { PrimaryModal } from '@/components/atoms/PrimaryModal';
import { Component, createSignal, JSX, JSXElement, mergeProps } from 'solid-js';

type propsType = {
  children: JSXElement;
  modalEvent: () => void;
  modalMessage?: string;
  yesButtonName?: string;
  noButtonName?: string;
};

export const ModalButton: Component<propsType> = (props) => {
  const marge = mergeProps(
    { modalMessage: '本当に実行しますか？', yesButtonName: 'はい', noButtonName: 'いいえ' },
    props
  );
  const [isOpen, setIsOpen] = createSignal(false);

  // 実行イベント
  const onEvent: JSX.EventHandlerUnion<HTMLSpanElement, MouseEvent> = (ev) => {
    ev.stopPropagation();
    props.modalEvent();
    setIsOpen(false);
  };

  // モーダル開閉イベント
  const modalOpen: JSX.EventHandlerUnion<HTMLSpanElement, MouseEvent> = (ev) => {
    ev.stopPropagation();
    setIsOpen(true);
  };
  const modalClose: JSX.EventHandlerUnion<HTMLSpanElement, MouseEvent> = (ev) => {
    ev.stopPropagation();
    setIsOpen(false);
  };

  return (
    <>
      <Button onClick={modalOpen}>{marge.children}</Button>

      <PrimaryModal isOpen={isOpen()} onClose={modalClose}>
        <p>{marge.modalMessage}</p>

        <Button onClick={onEvent}>{marge.yesButtonName}</Button>
        <Button seondary onClick={modalClose}>{marge.noButtonName}</Button>
      </PrimaryModal>
    </>
  );
};
