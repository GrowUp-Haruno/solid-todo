import { Component, createEffect, createSignal, Show } from 'solid-js';

import { useRegisterSW } from 'virtual:pwa-register/solid';
import { PrimaryModal } from '@/components/atoms/PrimaryModal';
import { PrimaryButton } from '@/components/atoms/PrimaryButton';

export const SwUpdatePrompt: Component = () => {
  const {
    needRefresh: [needRefresh],
    updateServiceWorker,
  } = useRegisterSW({});
  const [buttonMessage, setButtonMessage] = createSignal<'アップデート' | 'アップデート中…'>('アップデート');

  createEffect(() => {
    console.log(`needRefresh: ${needRefresh()}`);
  });

  return (
    <PrimaryModal isOpen={needRefresh()} onClose={() => {}}>
      <p>🎉 新しいバージョンがリリースされました🎉</p>
      <PrimaryButton
        onClick={() => {
          if (buttonMessage() === 'アップデート中…') return;
          setButtonMessage('アップデート中…');
          updateServiceWorker(true);
        }}
      >
        {buttonMessage}
      </PrimaryButton>
    </PrimaryModal>
  );
};
