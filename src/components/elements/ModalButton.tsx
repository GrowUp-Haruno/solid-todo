import { Button } from '@/components/atoms/Button';
import { PrimaryModal } from '@/components/atoms/PrimaryModal';
import { createModalButton } from '@/stores/createModalButton';
import { Component, createSignal, JSX, JSXElement, mergeProps } from 'solid-js';

export type ModalButtonPropsType = {
  children: JSXElement;
  modalEvent: () => void;
  modalMessage?: string;
  yesButtonName?: string;
  noButtonName?: string;
};

export const ModalButton: Component<ModalButtonPropsType> = (props) => {
  const { marge, isOpen, onEvent, modalOpen, modalClose } = createModalButton(props);

  return (
    <>
      <Button onClick={modalOpen}>{marge.children}</Button>

      <PrimaryModal isOpen={isOpen()} onClose={modalClose}>
        <p>{marge.modalMessage}</p>
        <Button onClick={onEvent}>{marge.yesButtonName}</Button>
        <Button seondary onClick={modalClose}>
          {marge.noButtonName}
        </Button>
      </PrimaryModal>
    </>
  );
};
