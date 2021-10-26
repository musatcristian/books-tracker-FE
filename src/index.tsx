import React from 'react';
import { render } from 'react-dom';

import { App } from '@App';

render(<App />, document.getElementById('react-root'));

if ('serviceWorker' in navigator) {
  window.addEventListener('DOMContentLoaded', () => {
    navigator.serviceWorker.register('/service-worker.js');
  });
}
