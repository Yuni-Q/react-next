if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // navigator.serviceWorker.register('/static/sw.js');
    navigator.serviceWorker.register('/_next/static/runtime/main.js');
  });
}