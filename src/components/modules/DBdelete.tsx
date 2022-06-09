import { ModalButton } from '@/components/elements/ModalButton';
import { localDB } from '@/db/localDB';
import { Component } from 'solid-js';

export const DBdelete: Component = () => {
  const handleDBdelete = () => {
    localDB.DeleteDatabase();
  };
  return (
    <ModalButton modalEvent={handleDBdelete} modalMessage="本当に削除しますか？">
      データベースを削除する
    </ModalButton>
  );
};
