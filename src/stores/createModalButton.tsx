import { ModalButtonPropsType } from "@/components/elements/ModalButton";
import { createSignal, JSX, mergeProps } from "solid-js";

export const createModalButton = (props: ModalButtonPropsType) => {
  const marge = mergeProps(
    { modalMessage: '本当に実行しますか？', yesButtonName: 'はい', noButtonName: 'いいえ' },
    props
  );
  const [isOpen, setIsOpen] = createSignal(false);

  // 実行イベント
  const onEvent: JSX.EventHandlerUnion<HTMLSpanElement, MouseEvent> = (ev) => {
    ev.stopPropagation();
    marge.modalEvent();
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

  return {
    marge,
    isOpen,
    onEvent,
    modalOpen,
    modalClose,
  };
};