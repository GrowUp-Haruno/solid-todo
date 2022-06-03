/* @refresh reload */
import { render } from 'solid-js/web';

import { SwUpdatePrompt } from '@/SwUpdatePrompt';
import { App } from '@/App';
import '@/assets/css/index.scss';

render(
  () => (
    <>
      <App />
      <SwUpdatePrompt />
    </>
  ),
  document.getElementById('root') as HTMLElement
);