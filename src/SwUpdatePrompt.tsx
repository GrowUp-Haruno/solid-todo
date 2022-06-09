import { Component,  createSignal } from 'solid-js';

import { useRegisterSW } from 'virtual:pwa-register/solid';
import { PrimaryModal } from '@/components/atoms/PrimaryModal';
import { Button } from '@/components/atoms/Button';

export const SwUpdatePrompt: Component = () => {
  const {
    needRefresh: [needRefresh],
    updateServiceWorker,
  } = useRegisterSW({});
  const [buttonMessage, setButtonMessage] = createSignal<'アップデート' | 'アップデート中…'>('アップデート');

  return (
    <PrimaryModal isOpen={needRefresh()} onClose={() => {}}>
      <p>🎉 新しいバージョンがリリースされました🎉</p>
      <Button
        onClick={() => {
          if (buttonMessage() === 'アップデート中…') return;
          setButtonMessage('アップデート中…');
          updateServiceWorker(true);
        }}
      >
        {buttonMessage}
      </Button>
    </PrimaryModal>
  );
};
