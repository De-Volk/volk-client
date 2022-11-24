import './app.css';
import App from './App.svelte';
import { worker } from './mocks';

worker.start();
const app = new App({
  target: document.getElementById('app'),
});

export default app;
